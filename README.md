# RubberDuckBench Website

A lightweight results website for RubberDuckBench — explore the LLM leaderboard and a question-level heatmap, then drill into trial answers, rubric deductions, and question categories.

Live site: `https://www.cs.brynmawr.edu/RubberDuckBench/`

Highlights
- One place for the paper, leaderboard, and detailed heatmap view
- Heatmap cells reflect average score across trials, with click-to-inspect details
- Static export designed to be hosted under `/RubberDuckBench/`

Tech Stack
- Next.js + React
- D3 (heatmap rendering)
- CSS Modules (+ a few Tailwind utility classes)

Getting Started
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Build Static Site (Produces `out/`)
```bash
npm run build
```

This repo is configured to export for subpath hosting at `/RubberDuckBench/` (so asset URLs work on the Bryn Mawr site).

Updating Results (Heatmap Data)
Heatmap data is generated into `data/heatmapData_generated.json`.

```bash
npx tsx scripts/import-data-heatmap.ts
```

Status
Website is functional and actively iterated (design polish + data refreshes as benchmark results evolve).
