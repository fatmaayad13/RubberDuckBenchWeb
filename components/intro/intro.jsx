"use client";
import styles from "./intro.module.css";

export const Intro = () => {
  return (
    <>
      <div className={styles.backgroundBlurs}>
        {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
      </div>

      <section className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subTitle}>A Benchmark for AI Coding Assistants</p>



          <ul className={styles.Buttons}>
            <li>
              <button
                className={styles.contactBtn}
                onClick={() => window.open("https://github.com/user2716/RubberDuckBench", "_blank")}
              >
                <div className="flex items-center gap-2"><img src="/images/logos/github.png" /> GitHub </div>
              </button>
            </li>
            <li>
              <button
                className={styles.contactBtn}
                onClick={() => window.open("https://arxiv.org/abs/2408.08453", "_blank")}
              >
                <div className="flex items-center gap-2"><img src="/images/logos/arxiv.png" /> arXiv </div>
              </button>
            </li>
            <li>
              <button
                className={styles.contactBtn}
              >  <div className="flex items-center gap-2"><img src="/images/logos/podium.png" /> <a href="#leaderboard" >Leaderboard </a></div>
              </button>

            </li>
          </ul>

          <br></br>
          <p className={styles.title}> RubberDuckBench is a benchmark for evaluating AI coding assistants on real-world, contextualized coding questions derived from GitHub pull request comments. 
            It includes 15 questions across Java, Python, and C++, each with detailed rubrics to assess answer correctness. 
            By testing 20 state-of-the-art LLMs, RubberDuckBench provides a framework for comparing model performance and advancing research in reliable AI coding assistants. <br></br>
          </p>
        
          <p className={styles.description}>
             Check out our&nbsp; <a href="https://arxiv.org/abs/2408.08453"target="_blank"> paper </a> &nbsp;for more information!
          </p>
        </div>

      </section>

    </>

  );
};
