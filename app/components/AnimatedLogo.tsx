"use client";

import  { useState } from "react";
import styles from "./AnimatedLogo.module.css";

export default function AnimatedLogo () {
    const [expanded, setExpanded] = useState(false);
    return (
        <button 
        className={styles.logo} 
        data-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? "Show Initials" : "Show Full Name"}
        aria-expanded={expanded}
        >
            <span className={styles.name}>
                <span className={`${styles.initial} text-zinc-800 dark:text-zinc-200`}>A</span>
                <span className={`${styles.suffix} ${styles.first} text-zinc-800 dark:text-zinc-200`}>ustin</span>
            </span>
            <span className={styles.name}>
                <span className={`${styles.initial} text-zinc-800 dark:text-zinc-200`}>M</span>
                <span className={`${styles.suffix} ${styles.last} text-zinc-800 dark:text-zinc-200`}>oorer</span>
            </span>
        </button>
    )
}