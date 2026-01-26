"use client";
import styles from "./highlights.module.css";

export const Highlights = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subTitle}>Key Highlights</p>

        <ul className={styles.highlightsList}>
          <li>
             We find that even state of the art models fail to give consistent, correct responses across the benchmark.
          </li>
          <li>
            Grok 4 (69.29%), Claude Opus 4 (68.5%), and GPT-5 (67.8%) perform best overall, but do not exhibit pairwise significant superiority over the next 9 best performing models.
          </li>
          <li>
             Most models obtain points through partial credit, with the best performing models only answering at most 2 questions completely correctly across all trials.
          </li>
          <li>
           Models often hallucinate with lies in 58.3% of responses on average.
          </li>
           <li>
           Cost analysis reveals no correlation between expense (API pricing or parameter count) and performance.
          </li>
        </ul>

        <p className={styles.description}>
          Explore the full methodology and results in our <a href="https://arxiv.org/abs/2601.16456" target="_blank">paper</a>.
        </p>
      </div>
    </section>
  );
};
