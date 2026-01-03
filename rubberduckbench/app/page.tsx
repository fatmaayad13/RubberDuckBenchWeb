import React from 'react'
import LeaderboardTable from "../components/leaderboard-table";
import {Navbar} from "./../components/navbar/navbar";
import {Intro} from "./../components/intro/intro";
import styles from './App.module.css';


const page = () => {
  return (<>
    <div className={styles.App}>
    <Navbar/>
    <Intro/>
  </div>

  <div className="flex flex-col p-10 bg-gray-100 h-scree w-full" >
    <h2 className="font font-semibold">LLM Leaderboard</h2>
    <div className="mt-10">
      <LeaderboardTable/></div>
  </div>
  </>
  );
};

export default page
