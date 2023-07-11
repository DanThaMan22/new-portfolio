import React from "react"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={styles.navCont}>
            <h1 className="header">Navigation</h1>
            <div className={styles.stackVert}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </div>
        </nav>
    )
}

export default Navigation
