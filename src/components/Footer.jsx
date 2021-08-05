import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Anthony Hernandez Flores</h1>
        <p>Pueblo Libre, Lima, Peru, Peru</p>
      </div>
      <div className="footer-contact">
        <h3>Contact Me</h3>
        <p>And works together</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design by Anthony Hernandez Flores</div>
        <div className="sns-links">
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin linkedin"/>
          </a>
          <a href="https://github.com">
            <i className="fab fa-github github"/>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
