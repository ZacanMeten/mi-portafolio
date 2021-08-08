import React from "react";
import "./styles/About.css";
import MiFoto from "../media/Me.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          My name is Anthony Arnaldo Hernandez Flores, I was born in 1998. I am
          a web development oriented programmer
        </p>
      </div>
      <div className="about-img">
        <img src={MiFoto} alt="about" />
      </div>
    </div>
  );
};

export default About;
