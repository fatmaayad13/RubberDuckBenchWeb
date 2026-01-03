export type LeaderboardRow = {
  rank: number
  model: string
  org: string
  overall: number
  reasoning: number
  coding: number
}

export const leaderboardData: LeaderboardRow[] = [
  {
    rank: 1,
    model: "GPT-4.1",
    org: "OpenAI",
    overall: 92.4,
    reasoning: 94.1,
    coding: 91.8,
  },
  {
    rank: 2,
    model: "Claude 3.5",
    org: "Anthropic",
    overall: 89.7,
    reasoning: 90.2,
    coding: 88.4,
  },
  {
    rank: 3,
    model: "Gemini 1.5 Pro",
    org: "Google",
    overall: 87.3,
    reasoning: 86.9,
    coding: 85.4,
  },
]
