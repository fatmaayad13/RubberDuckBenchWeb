"use client";
import { useState } from "react";
import styles from "./cite.module.css";

export const CiteSection = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{mohammad2026rubberduckbench,
  title={RubberDuckBench: A Benchmark for AI Coding Assistants},
  author={Ferida Mohammad and Fatma Ayad and Petros Maniatis and Satish Chandra and Elizabeth Dinella},
  booktitle={Proceedings of the Workshop on Large Language Models for Code (LLM4Code) at ICSE 2026},
  year={2026},
  doi={10.1145/3786181.3788710},
  eprint={2601.16456},
  archivePrefix={arXiv},
  note={arXiv:2601.16456 [cs.SE]}
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
