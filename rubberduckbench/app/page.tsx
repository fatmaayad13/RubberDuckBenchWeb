import React from 'react'
import LeaderboardTable from "../components/leaderboard-table";
import {Navbar} from "./../components/navbar/navbar";
import {Intro} from "./../components/intro/intro";
import {Footer} from "./../components/footer/footer";
import Heatmap from "../components/heatmap/heatmap";
import styles from './App.module.css';


const page = () => {
  return (<>
    <div className={styles.App}>
    <Navbar/>
    <Intro/>
  </div>

  <div className="flex flex-col p-10 bg-gray-100 h-screen w-full" >
    <h2 id ="leaderboard" className="font font-semibold text-lg ml-45">LLM Leaderboard</h2>
    <div className="mt-10 ml-45 mr-45">
      <LeaderboardTable/></div>
 
   
  </div>
         <div className = "bg-gray-100 h-screen w-full">
    <Heatmap/></div>
 <div className={styles.App}> <Footer/> </div>
  </>
  );
};

export default page
