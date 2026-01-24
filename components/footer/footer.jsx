"use client";
import styles from "./footer.module.css";
import brynMawrLogo from "../../public/images/logos/bryn-mawr-logo.png"; // adjust path
import duckLogo from "../../public/images/RubberDuck/logo.png"; // optional ico

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Row — Branding + Links */}
      <div className={styles.footerTop}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoText}>
            <img src={duckLogo.src} alt="Rubber Duck Bench Logo" className={styles.logo} />
            <a className={styles.brandName}>Rubber Duck Bench</a>
          </div>
          <p className={styles.tagline}>A Benchmark for AI Coding Assistants</p>
        </div>

        {/* Navigation / Useful Links */}
        <div className={styles.links}>
          <div>
            <ul>
              <li><a href="https://github.com/user2716/RubberDuckBench" target="_blank">GitHub Repo</a></li>
              <li><a href="https://arxiv.org/abs/2408.08453" target="_blank">arXiv Paper</a></li>
              <li><a href="#about">About This Work</a></li>
              <li><a href="mailto:edinella@brynmawr.edu">Contact</a></li>


            </ul>
          </div>
          <div>

          </div>
        </div>
      </div>

      {/* Bottom Row — Social + Copyright */}
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


        {/* <p className={styles.copy}>
          © {new Date().getFullYear()} Rubber Duck Bench &amp; Bryn Mawr College. &nbsp;All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};
