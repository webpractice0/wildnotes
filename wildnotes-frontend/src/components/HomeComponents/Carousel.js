import React, { useState, useEffect } from "react";
import axios from "axios";
const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/misc/carousel/")
      .then((response) => {
        console.log("Carousel: ", response.data);
        setCarouselImages(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <div className="container">
      <div
        id="wildotesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselImages.map((element, index) => {
            return (
              <button
                type="button"
                data-bs-target="#wildotesCarousel"
                data-bs-slide-to={index}
                className={index===0?'active':''}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {carouselImages.map((element, index) => {
            
            return <div className={index === 0?'carousel-item active':'carousel-item'}  data-bs-interval="2000">
            <img
              src={element.image}
              className="d-block w-70"
              alt={element.image_alt}
              style={{width: '400px'}}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{textShadow:'1px 2px 4px black'}}>{element.main_text}</h5>
              <p style={{textShadow:'1px 2px 4px black'}}>{element.sub_text}</p>
            </div>
          </div>
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#wildotesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#wildotesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
