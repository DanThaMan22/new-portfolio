import React from "react";
import styles from "./Skillbar.module.css";

const Skillbar = () => {
  return (
    <div className={styles.skillbar}>
      <div className="Skills_container">
        <div className="container">
          <p>HTML</p>
          <div className="skillsbar">90%</div>
        </div>
        <div className="container">
          <p>CSS</p>
          <div className="skillsbar">80%</div>
        </div>
        <div className="container">
          <p>JavaScript</p>
          <div className="skillsbar">65%</div>
        </div>
        <div className="container">
          <p>PHP</p>
          <div className="skillsbar">60%</div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
