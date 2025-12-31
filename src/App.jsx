import {Navbar} from "./components/navbar/navbar";
import {Intro} from "./components/intro/intro";
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Intro/>

    </div> 
    
  );
}

export default App;
