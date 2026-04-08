"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { withBasePath } from "../../lib/withBasePath";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <img
                    src={withBasePath("/images/RubberDuck/logo.png")}
                    alt="Rubber Duck Picture"
                    className={styles.Image}
                />
                <Link className={styles.title} href="/">
                    RubberDuckBench
                </Link>
            </div>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen
                        ? withBasePath("/images/nav/closeIcon.png")
                        : withBasePath("/images/nav/menuIcon.png")
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
                        <a href="#heatmap">Heatmap</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
