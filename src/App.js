import React, { useState, useEffect } from "react";

import "./App.css";
import Cover from "./components/Cover";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Slider from "./components/Slider";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const capScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", capScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Cover />
      <NavBar isScrolling={scrollHeight} />
      <About />
      <Slider />
    </div>
  );
}

export default App;
