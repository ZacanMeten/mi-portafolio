import React from "react";
import "./styles/Navbar.css";

const Navbar = ({ isScrolling }) => {
  const haciaArriba = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navbar ${isScrolling > 35 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={haciaArriba}>
        Anthony Hernandez FLores
      </div>
    </nav>
  );
};

export default Navbar;
