"use client";
import styles from "./intro.module.css";

export const Intro = () => {   
    return (
    <>
    <div className={styles.backgroundBlurs}>
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </div>

    <section className = {styles.container}> 
            <div className={styles.content}>
            <p className = {styles.subTitle}>A multilingual benchmark featuring coding
               questions and detailed evaluation rubrics. It is designed as a standard 
               for advancing research on reliable and accurate AI coding assistants.</p>

            <h1 className = {styles.title}>

            </h1>
            
              <ul className={styles.Buttons}>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://github.com/user2716/RubberDuckBench", "_blank")}
                  >
                   <div className="flex items-center gap-2"><img src = "/images/logos/github.png"/> GitHub </div>
                  </button>
                </li>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://arxiv.org/abs/2408.08453", "_blank")}
                  >
                     <div className="flex items-center gap-2"><img src = "/images/logos/arxiv.png"/> arXiv </div>
                  </button>
                </li>
                                <li>
                  <button
                    className={styles.contactBtn} 
                  ><a href="#leaderboard" >Leaderboard </a>
                  </button>
                  
                </li>
              </ul>
              <br />
              <p className = {styles.description}>Check out my website :)</p>
            </div>
            
   </section>

    </>
  
    );
};
