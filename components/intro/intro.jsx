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
                <div className="flex items-center gap-2"><img src="./images/logos/github.png" /> GitHub </div>
              </button>
            </li>
            <li>
              <button
                className={styles.contactBtn}
                onClick={() => window.open("https://arxiv.org/abs/2601.16456", "_blank")}
              >
                <div className="flex items-center gap-2"><img src="./images/logos/arxiv.png" /> arXiv </div>
              </button>
            </li>
            <li>
              <button
                className={styles.contactBtn}
              >  <div className="flex items-center gap-2"><img src="./images/logos/podium.png" /> <a href="#leaderboard" >Leaderboard </a></div>
              </button>

            </li>
          </ul>

          <br></br>
          <p className={styles.title}> Programmers are turning to AI coding assistants to answer questions about their code, but it is unclear how well models perform at answering contextualized questions.
             Do state of the art LLMs answer questions about contextualized code correctly? Do they hallucinate or lie about API or project specific facts? Do certain models perform better than others? 
             We aim to answer these questions with RubberDuckBench: A benchmark for AI coding assistants. It includes 15 questions across Java, Python, and C++ derived from real world PR review comments. 
             Each question is paired with a detailed rubric that was manually developed and applied to ensure a reliable evaluation. We evaluate a diverse set of 20 LLMs (proprietary & open-source) on answering these questions.
 <br></br>
          </p>
        
          <p className={styles.description}>
             Check out our&nbsp; <a href="https://https://arxiv.org/abs/2601.16456"target="_blank"> paper </a> &nbsp;for more information!
          </p>
        </div>

      </section>

    </>

  );
};
