"use client";
import styles from "./footer.module.css";

export const Footer = () => {   
    return (
    <>
    <div className={styles.backgroundBlurs}>
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </div>

    <section className = {styles.container}> 
            <div className={styles.content}>
            <p className = {styles.subTitle}>Contact</p>

            <h1 className = {styles.title}>

            </h1>
            
              <ul className={styles.Buttons}>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://github.com/user2716/RubberDuckBench", "_blank")}
                  >
                    GitHub
                  </button>
                </li>
                <li>
                  <button
                    className={styles.contactBtn}
                    onClick={() => window.open("https://arxiv.org/abs/2408.08453", "_blank")}
                  >
                    arXiv
                  </button>
                </li>
                                <li>
                  {/* <button
                    className={styles.contactBtn} 
                  ><a href="#leaderboard" >Leaderboard </a>
                  </button> */}
                </li>
              </ul>
              <br />
              <p className = {styles.description}>Thank you!</p>
            </div>
            
   </section>

    </>
  
    );
};
