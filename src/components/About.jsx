import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis
          voluptate similique eaque quia vitae quos quae ipsam ad odit, sint sit
          aperiam velit itaque cupiditate quis neque voluptas, delectus dolorem
          explicabo pariatur necessitatibus?
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="foto mia"
        />
      </div>
    </div>
  );
};

export default About;
