import React from "react";
import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./styles/Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">My Projects</div>
      <Carousel
        slides={Slides}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: { numberOfSlides: 3 },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 3500,
            },
          },
        ]}
        breakpoints={{
          960: {
            itemWidth: 250,
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: { numberOfSlides: 2 },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Slider;
