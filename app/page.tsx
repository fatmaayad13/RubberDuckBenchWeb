"use client";
import React from 'react'
import LeaderboardTable from "../components/leaderboard-table";
import { Navbar } from "./../components/navbar/navbar";
import { Intro } from "./../components/intro/intro";
import { Footer } from "./../components/footer/footer";
import { Highlights } from "../components/highlights/highlights";
import { CiteSection } from "../components/cite/cite";
import Heatmap from "../components/heatmap/heatmap";
import styles from './App.module.css';

const page = () => {
  return (
    <>
      <div className={`${styles.App} ${styles.pageSurface}`}>
        <Navbar />
        <section id="about">
          <Intro />
        </section>
      </div>

      <Highlights />

      <section className={styles.sectionShell}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>Benchmark Results</span>
            <h2 id="leaderboard" className={styles.sectionTitle}>
              LLM Leaderboard
            </h2>
            <p className={styles.sectionDescription}>
              The leaderboard below presents the performance of state-of-the-art LLMs
              across multiple metrics, including average score, binary correctness, and
              cost per query.
            </p>
          </div>

          <div className={styles.dataCard}>
            <LeaderboardTable />
          </div>
        </div>
      </section>

      <section id="heatmap" className={styles.sectionShell}>
        <div className={`${styles.sectionInner} ${styles.heatmapSectionInner}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionKicker}>Detailed View</span>
            <h2 className={styles.sectionTitle}>Heatmap Showing Performance Across Question Types</h2>
            <p className={styles.sectionDescription}>
              This heatmap shows LLM model performance on questions across different languages. Rows are models, columns are language and question numbers, and cell colors reflect average scores across trials. Click a cell to view details like the question, average score, trial answers, and type.
            </p>
          </div>

          <div className={`${styles.dataCard} ${styles.heatmapFrame}`}>
            <Heatmap />
          </div>
        </div>
      </section>

      <CiteSection />
      <div id="contact" className={styles.App}>
        <Footer />
      </div>
    </>
  );
};

export default page
