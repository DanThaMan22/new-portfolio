import React from "react";
import img from "./assets/img.jpeg";

const About = () => {
  return (
    <div className="about">
      <h1 className="header">About Me</h1>
      <a>
        My Name is Daniel Wenxuan Niu, I'm currently a sophmore in College
        attending, Diablo Valley College.... etc
      </a>
      <img src={img}></img>
    </div>
  );
};
export default About;
