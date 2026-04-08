export type TrialKey = "trial1" | "trial2" | "trial3";

export const config = {
  repoRoot: "RubberDuckBench",
  answersRoot: "results/out",
  questionsRoot: "dataset",
  rubricApplicationsRoot: "results/rubric-applications",
  rq1ScriptPath: "RubberDuckBench/eval/rq1.py",
  scoreOutputPath: "RubberDuckBench/eval/rq1-output.txt",
  outputPath: "data/heatmapData_generated.json",
  githubBase: "https://github.com/elizabethdinella/RubberDuckBench/blob/main",
} as const;

export const languageLabelMap = {
  py: "Py",
  java: "Java",
  cpp: "C++",
} as const;

export const modelFolderToDisplayName: Record<string, string> = {
  "claude-opus-4": "Claude Opus 4",
  "claude-opus-4.1": "Claude Opus 4.1",
  "claude-sonnet-3.7": "Claude Sonnet 3.7",
  "claude-sonnet-4": "Claude Sonnet 4",
  "deepseek-r1-70b": "Deepseek-R1",
  "gemini-2.0-flash": "Gemini 2.0 Flash",
  "gemini-2.5-flash": "Gemini 2.5 Flash",
  "gemini-2.5-pro": "Gemini 2.5 Pro",
  "gpt-4.1": "Gpt-4.1",
  "gpt-5": "Gpt-5",
  "gpt-mini-120": "gpt-oss-120",
  "gpt-mini-20": "gpt-oss-20",
  "gpt-o3": "o3",
  "grok-3": "Grok 3",
  "grok-4": "Grok 4",
  "llama-scout-4": "Llama 4 Scout",
  "llama3.3-70": "Llama3.3 70",
  "mistral-large": "Mistral Large",
  "qwen3": "Qwen 3",
  "qwen3-coder": "Qwen 3 Coder",
};
