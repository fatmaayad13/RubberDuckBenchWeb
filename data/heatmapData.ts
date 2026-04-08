import generatedHeatmapData from "./heatmapData_generated.json";

export type TrialKey = "trial1" | "trial2" | "trial3";

export type TrialData<T> = {
  trial1: T;
  trial2?: T;
  trial3?: T;
};

export type Entry = {
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

export const heatmapData: Entry[] = generatedHeatmapData as Entry[];
