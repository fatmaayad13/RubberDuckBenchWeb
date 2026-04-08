import * as fs from "node:fs/promises";
import * as path from "node:path";
import {
  config,
  languageLabelMap,
  modelFolderToDisplayName,
  type TrialKey,
} from "./import-config";

type TrialData<T> = {
  trial1: T;
  trial2?: T;
  trial3?: T;
};

type Entry = {
  model: string;
  language_num: string;
  score: TrialData<number>;
  averageScore: number;
  question: string;
  answer: TrialData<string>;
  type: string;
  rubric: string;
  pointsdeducted: TrialData<string>;
};

type LanguageCode = keyof typeof languageLabelMap;

type AnswerFileInfo = {
  language: LanguageCode;
  languageNum: string;
  model: string;
  questionNumber: number;
  trial: TrialKey;
  fullPath: string;
};

const repoRoot = path.resolve(process.cwd(), config.repoRoot);
const answersRoot = path.join(repoRoot, config.answersRoot);
const rubricApplicationsRoot = path.join(repoRoot, config.rubricApplicationsRoot);
const rq1ScriptPath = path.resolve(process.cwd(), config.rq1ScriptPath);
const scoreOutputPath = path.resolve(process.cwd(), config.scoreOutputPath);
const outputPath = path.resolve(process.cwd(), config.outputPath);

function getLanguageNum(language: LanguageCode, questionNumber: number): string {
  return `${languageLabelMap[language]} ${questionNumber}`;
}

function getRubricUrl(language: LanguageCode, questionNumber: number): string {
  return `${config.githubBase}/dataset/${language}/rubrics/${questionNumber}.json`;
}

function makeEmptyTrialData<T>(value: T): TrialData<T> {
  return {
    trial1: value,
    trial2: value,
    trial3: value,
  };
}

function setTrialValue<T>(trialData: TrialData<T>, trial: TrialKey, value: T): void {
  trialData[trial] = value;
}

function getAverageScore(score: TrialData<number>): number {
  const values = [score.trial1, score.trial2 ?? 0, score.trial3 ?? 0];
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Number(average.toFixed(2));
}

function stripWrappingQuotes(value: string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function extractAnswer(rawText: string): string {
  const taggedMatch = rawText.match(/<answer>([\s\S]*?)<\/answer>/i);
  if (taggedMatch) {
    return taggedMatch[1].trim();
  }

  return rawText.trim();
}

function parseAnswerFilePath(filePath: string): AnswerFileInfo | null {
  const normalized = filePath.replace(/\\/g, "/");
  const match = normalized.match(
    /results\/out\/(py|java|cpp)\/([^/]+)\/(\d+)\/[^/]+?(?:_t([23]))?\.txt$/i
  );

  if (!match) {
    return null;
  }

  const language = match[1].toLowerCase() as LanguageCode;
  const modelFolder = match[2];
  const questionNumber = Number(match[3]);
  const trial = (`trial${match[4] ?? "1"}`) as TrialKey;
  const model = modelFolderToDisplayName[modelFolder] ?? modelFolder;

  return {
    language,
    languageNum: getLanguageNum(language, questionNumber),
    model,
    questionNumber,
    trial,
    fullPath: filePath,
  };
}

async function walkFiles(rootDir: string): Promise<string[]> {
  const result: string[] = [];
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      result.push(...(await walkFiles(fullPath)));
      continue;
    }

    if (entry.isFile()) {
      result.push(fullPath);
    }
  }

  return result;
}

async function loadQuestionText(
  language: LanguageCode,
  questionNumber: number
): Promise<string> {
  const questionPath = path.join(
    repoRoot,
    config.questionsRoot,
    language,
    "questions",
    `${questionNumber}.txt`
  );

  return (await fs.readFile(questionPath, "utf8")).trim();
}

async function buildQuestionTextMap(): Promise<Map<string, string>> {
  const questionTextMap = new Map<string, string>();

  for (const language of Object.keys(languageLabelMap) as LanguageCode[]) {
    for (let questionNumber = 1; questionNumber <= 5; questionNumber += 1) {
      const languageNum = getLanguageNum(language, questionNumber);
      const questionText = await loadQuestionText(language, questionNumber);
      questionTextMap.set(languageNum, questionText);
    }
  }

  return questionTextMap;
}

async function buildPointsDeductedMap(): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const csvFiles = await fs.readdir(rubricApplicationsRoot);

  for (const fileName of csvFiles) {
    if (!fileName.endsWith(".csv")) {
      continue;
    }

    const match = fileName.match(/^(py|java|cpp)(\d+)\.csv$/i);
    if (!match) {
      continue;
    }

    const language = match[1].toLowerCase() as LanguageCode;
    const questionNumber = Number(match[2]);
    const languageNum = getLanguageNum(language, questionNumber);
    const csvPath = path.join(rubricApplicationsRoot, fileName);
    const lines = (await fs.readFile(csvPath, "utf8"))
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    for (const line of lines.slice(1)) {
      const rowMatch = line.match(/^([^,]+),([^,]+),(.*)$/);
      if (!rowMatch) {
        continue;
      }

      const model = rowMatch[1].trim();
      const trial = `trial${rowMatch[2].trim()}` as TrialKey;
      const deducted = stripWrappingQuotes(rowMatch[3]);
      result.set(`${languageNum}::${model}::${trial}`, deducted);
    }
  }

  return result;
}

async function buildScoreMap(): Promise<Map<string, number>> {
  const result = new Map<string, number>();
  const scoreText = await fs.readFile(scoreOutputPath, "utf8");

  let currentLanguage: LanguageCode | null = null;
  let currentQuestionNumber: number | null = null;

  for (const rawLine of scoreText.split(/\r?\n/)) {
    const line = rawLine.trimEnd();

    const languageMatch = line.match(/^=+\s*Results for (py|java|cpp)\s*=+$/i);
    if (languageMatch) {
      currentLanguage = languageMatch[1].toLowerCase() as LanguageCode;
      currentQuestionNumber = null;
      continue;
    }

    const questionMatch = line.match(/^Scores for question:\s*(\d+)$/i);
    if (questionMatch) {
      currentQuestionNumber = Number(questionMatch[1]);
      continue;
    }

    if (!currentLanguage || currentQuestionNumber === null) {
      continue;
    }

    const scoreMatch = line.match(/^(.+?)\s+all\s+:\s+\[([^\]]+)\]$/);
    if (!scoreMatch) {
      continue;
    }

    const model = scoreMatch[1].trim();
    const scores = scoreMatch[2]
      .split(",")
      .map((part) => Number(part.trim()))
      .filter((value) => !Number.isNaN(value));

    const languageNum = getLanguageNum(currentLanguage, currentQuestionNumber);
    const trials: TrialKey[] = ["trial1", "trial2", "trial3"];

    trials.forEach((trial, index) => {
      const value = scores[index];
      if (typeof value === "number") {
        result.set(`${languageNum}::${model}::${trial}`, value);
      }
    });
  }

  return result;
}

async function buildQuestionTypeMap(): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const rq1Text = await fs.readFile(rq1ScriptPath, "utf8");
  const dictMatch = rq1Text.match(/question_categories\s*=\s*\{([\s\S]*?)\n\}/);

  if (!dictMatch) {
    throw new Error(`Could not find question_categories in ${rq1ScriptPath}`);
  }

  const entryPattern = /"([^"]+)"\s*:\s*"([^"]+)"/g;
  for (const match of dictMatch[1].matchAll(entryPattern)) {
    result.set(match[1], match[2]);
  }

  return result;
}

async function buildAnswerEntries(): Promise<Map<string, Entry>> {
  const answerFiles = await walkFiles(answersRoot);
  const questionTextMap = await buildQuestionTextMap();
  const pointsDeductedMap = await buildPointsDeductedMap();
  const scoreMap = await buildScoreMap();
  const questionTypeMap = await buildQuestionTypeMap();
  const entries = new Map<string, Entry>();

  for (const answerFile of answerFiles) {
    const info = parseAnswerFilePath(answerFile);
    if (!info) {
      continue;
    }

    const key = `${info.model}::${info.languageNum}`;
    let entry = entries.get(key);

    if (!entry) {
      const questionText = questionTextMap.get(info.languageNum) ?? "";
      entry = {
        model: info.model,
        language_num: info.languageNum,
        averageScore: 0,
        question: questionText,
        type: questionTypeMap.get(info.languageNum) ?? "",
        score: makeEmptyTrialData(0),
        answer: makeEmptyTrialData(""),
        rubric: getRubricUrl(info.language, info.questionNumber),
        pointsdeducted: makeEmptyTrialData(""),
      };
      entries.set(key, entry);
    }

    const rawAnswer = await fs.readFile(info.fullPath, "utf8");
    setTrialValue(entry.answer, info.trial, extractAnswer(rawAnswer));
    setTrialValue(
      entry.pointsdeducted,
      info.trial,
      pointsDeductedMap.get(`${info.languageNum}::${info.model}::${info.trial}`) ?? ""
    );
    setTrialValue(
      entry.score,
      info.trial,
      scoreMap.get(`${info.languageNum}::${info.model}::${info.trial}`) ?? 0
    );
    entry.averageScore = getAverageScore(entry.score);
  }

  return entries;
}

async function main(): Promise<void> {
  const entries = await buildAnswerEntries();
  const sortedEntries = Array.from(entries.values()).sort((a, b) => {
    if (a.model !== b.model) {
      return a.model.localeCompare(b.model);
    }

    const [aLanguage, aQuestion] = a.language_num.split(" ");
    const [bLanguage, bQuestion] = b.language_num.split(" ");
    if (aLanguage !== bLanguage) {
      return aLanguage.localeCompare(bLanguage);
    }

    return Number(aQuestion) - Number(bQuestion);
  });

  await fs.writeFile(outputPath, JSON.stringify(sortedEntries, null, 2));
  console.log(`Wrote ${sortedEntries.length} entries to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
