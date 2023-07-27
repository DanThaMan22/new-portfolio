import React from "react";
import styles from "./Hero.module.css";
import img from "../assets/img.jpeg";
const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className="header">Daniel Niu</h1>
      <a>Aspiring Fullstack Devloper</a>
      <a>Coding == Life</a>
      <img src={img}></img>
    </div>
  );
};
export default Hero;
