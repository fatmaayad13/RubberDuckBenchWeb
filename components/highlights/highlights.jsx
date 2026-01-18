"use client";
import styles from "./highlights.module.css";

export const Highlights = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subTitle}>Key Highlights</p>

        <ul className={styles.highlightsList}>
          <li>
            <strong>Realistic Evaluation:</strong> RubberDuckBench tests AI coding assistants on 15 contextualized questions derived from GitHub pull request comments, spanning Java, Python, and C++. This goes beyond traditional benchmarks by evaluating code reasoning in real-world projects.
          </li>
          <li>
            <strong>Challenging Benchmark:</strong> Even the top-performing models (Grok 4: 69.3%, Claude Opus 4: 68.5%, GPT-5: 67.8%) rarely answer questions completely correctly across trials, highlighting the difficulty of reasoning over contextualized code.
          </li>
          <li>
            <strong>Language & Question Type Differences:</strong> Models perform best on Java and Library Behavior questions, but struggle with Python and Project Behavior questions, indicating variability in cross-language and cross-task performance.
          </li>
          <li>
            <strong>Performance vs Cost & Size:</strong> High model cost or larger parameter counts do not guarantee better performance. Some smaller, low-cost models achieve comparable or better results than larger, expensive alternatives.
          </li>
        </ul>

        <p className={styles.description}>
          Explore the full methodology and results in our <a href="https://arxiv.org/abs/2408.08453" target="_blank">paper</a>.
        </p>
      </div>
    </section>
  );
};
