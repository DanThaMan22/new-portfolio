import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <h1 id="contacts">Contact Me</h1>
            <li>GitHub</li>
            <li>Email</li>
            <li>Linkedln</li>
        </div>
    )
}

export default Footer
