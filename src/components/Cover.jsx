import React from "react";
import "./styles/Cover.css";
import Video from "../media/Background.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={Video} autoPlay loop muted />
      <h1> Anthony Hernandez Flores</h1>
      <p>Developer | Designer | Art Creator</p>
    </div>
  );
};

export default Cover;
