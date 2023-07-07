import React from "react";
import "./index.css";
const Navigation = () => {
  return (
    <nav>
      <div>
        <h1 className="header">Navigation</h1>
        <div className="stackVert">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="Projects">Projects</a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
