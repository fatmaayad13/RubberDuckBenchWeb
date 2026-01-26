"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <img
                    src="./images/RubberDuck/logo.png"
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
                        ? "./images/nav/closeIcon.png"
                        : "./images/nav/menuIcon.png"
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
                        <a href="#leaderboard">Leaderboard</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>




    );

};
