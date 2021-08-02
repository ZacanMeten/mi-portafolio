import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./styles/Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">My Projects</div>

      <Carousel
        plugins={['arrows', 'infinite', 'centered']}
        slidesPerPages={3}
        animationSpeed={200}
        offset={50}
        itemWidth={450}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPages: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;
