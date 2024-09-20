import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    { title: "Slide 1", description: "This is the description for Slide 1" },
    { title: "Slide 2", description: "This is the description for Slide 2" },
    { title: "Slide 3", description: "This is the description for Slide 3" },
    { title: "Slide 4", description: "This is the description for Slide 4" },
  ];

  return (
    <div className="sliderWrapper">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ padding: "20px", textAlign: "center" }}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
