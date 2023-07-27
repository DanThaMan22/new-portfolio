import React from "react";
import styles from "./footer.module.css";
import img1 from "../assets/githublogopng.png";
import img2 from "../assets/gmaillogopng.png";
import img3 from "../assets/linkedinimgpng.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h1 id="contacts">Contact Me</h1>
      <li>
        <a href="https://github.com/DanThaMan22">
          <img src={img1}></img>
        </a>
      </li>
      <li>
        <a href="mailto:danielniu146@gmail.com">
          <img src={img2}></img>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/daniel-niu-64608a285/">
          <img src={img3}></img>
        </a>
      </li>
    </div>
  );
};

export default Footer;
