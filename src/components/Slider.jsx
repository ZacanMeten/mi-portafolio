import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./styles/Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">My Projects</div>
      <Carousel
        slides={Slides}
        animationSpeed={250}
        offset={40}
        itemWidth={410}
        plugins={[
          'centered',
          'infinite',
          'arrows', 
          { 
            resolve: slidesToShowPlugin,
            options:{numberOfSlides: 3},
          }]
        }
        breakpoints={
          {960: {plugins:[{resolve: slidesToShowPlugin, options:{numberOfSlides:1}}]}}
        }
      />
    </div>
  );
};

export default Slider;
