import React, {useState} from "react";
import styles from "./intro.module.css";

export const Intro = () => {   
    return (
    <>
    <div className={styles.backgroundBlurs}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </div>

    <section className = {styles.container}> 
            <div className={styles.content}>
            <p className = {styles.subTitle}>Hey there!</p>

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
                
              </ul>
              <br />
              <p className = {styles.description}>Check out my website :)</p>
            </div>
            
   </section>

    </>
  
    );
};
