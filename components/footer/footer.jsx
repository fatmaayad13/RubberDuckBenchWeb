"use client";
import styles from "./footer.module.css";
import brynMawrLogo from "../../public/images/logos/bryn-mawr-logo.png";
import duckLogo from "../../public/images/RubberDuck/logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <div className={styles.logoText}>
            <img src={duckLogo.src} alt="Rubber Duck Bench Logo" className={styles.logo} />
            <span className={styles.brandName}>Rubber Duck Bench</span>
          </div>
          <p className={styles.tagline}>A Benchmark for AI Coding Assistants</p>
        </div>

        <div className={styles.links}>
          <div>
            <ul>
              <li><a href="https://github.com/user2716/RubberDuckBench" target="_blank" rel="noreferrer">GitHub Repo</a></li>
              <li><a href="https://arxiv.org/abs/2601.16456" target="_blank" rel="noreferrer">arXiv Paper</a></li>
              <li><a href="#about">About This Work</a></li>
              <li><a href="mailto:edinella@brynmawr.edu">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.brynMawr}>
          <a
            href="https://www.brynmawr.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={brynMawrLogo.src}
              alt="Bryn Mawr College Logo"
              className={styles.brynMawrLogo}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
