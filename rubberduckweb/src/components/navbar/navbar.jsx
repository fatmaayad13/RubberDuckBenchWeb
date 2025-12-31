import React, {useState} from "react";
import styles from "./Navbar.module.css";
 import menuIcon from "../../assets/nav/menuIcon.png";
 import closeIcon from "../../assets/nav/closeIcon.png";
 import rbb from "../../assets/logo/logo.png";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

    <nav className={styles.navbar}> 
    <div class={styles.brand}>
       <img
        src={rbb}
        alt="Rubber Duck Picture"
        className={styles.Image}
        />
        <a className={styles.title} href="/">
        RubberDuckBench 
        </a>
        </div>

        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen 
                    ? closeIcon
                    : menuIcon
                } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                                <li>
                    <a href="#projects">Projects</a>
                </li>
                                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
 
    </nav>



   
    );
    
};
