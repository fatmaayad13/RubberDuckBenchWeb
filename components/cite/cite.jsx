"use client";
import { useState } from "react";
import styles from "./cite.module.css";

export const CiteSection = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{dinella2026rubberduckbench,
  title={RubberDuckBench: A Benchmark for AI Coding Assistants},
  author={Elizabeth Dinella and Ferida Mohammad and Fatma Ayad and Petros Maniatis and Satish Chandra},
  booktitle={LLM4Code at ICSE},
  year={2026}
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section className={styles.container}>
      <p className={styles.message}>
        If you would like to use RubberDuckBench in your work, please cite our paper.
      </p>

      <div className={styles.codeBox}>
        <pre>{bibtex}</pre>
      </div>

      <button className={styles.copyBtn} onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </section>
  );
};
