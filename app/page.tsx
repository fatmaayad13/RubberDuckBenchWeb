import React from 'react'
import LeaderboardTable from "../components/leaderboard-table";
import { Navbar } from "./../components/navbar/navbar";
import { Intro } from "./../components/intro/intro";
import { Footer } from "./../components/footer/footer";
import {Highlights} from "../components/highlights/highlights";
import {CiteSection} from "../components/cite/cite";
import Heatmap from "../components/heatmap/heatmap";
import styles from './App.module.css';


const page = () => {
  return (<>
    <div className={styles.App}>
      <Navbar />
      <h2 id="about"> <Intro /> </h2>
    </div>
    <Highlights/>
    <div className="flex flex-col p-10 bg-gray-100 w-full h-230"
    >
      <h2 id="leaderboard" className="font text-lg ml-25"
        style={{ fontFamily: "Gill Sans MT, sans-serif" }}>LLM Leaderboard</h2>
      <h2
        className="text-gray-500 text-sm leading-5 mt-2 mb-6 ml-25"
        style={{ fontFamily: "Gill Sans MT, sans-serif" }}
      >        The leaderboard below presents the performance of state-of-the-art LLMs across multiple metrics, including average score, binary correctness, and cost per query. <br></br>
        Use it to compare models, explore their rankings, and get a quick overview of how each LLM performs on our benchmark tasks.</h2>
      <div className="mt-10 ml-45 mr-45">
        <LeaderboardTable /></div>


    </div>
    <div className="bg-gray-100 h-full w-full overflow-auto">
      <Heatmap /></div>
      <CiteSection/>
    <div id="contact" className={styles.App}> <Footer /> </div>
    

  </>
  );
};

export default page
