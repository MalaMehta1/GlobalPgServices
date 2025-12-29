import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  // Slide data stored in an array
  const slides = [
    {
      id: "img-1",
      src: "../images/banner/banner6.jpeg",
      next: "img-2",
      prev: "img-3",
    },
    {
      id: "img-2",
      src: "../images/banner/banner3.jpeg",
      next: "img-3",
      prev: "img-1",
    },
    {
      id: "img-3",
      src: "../images/banner/banner5.jpeg",
      next: "img-1",
      prev: "img-2",
    },
  
 
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle slide change
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide
    }, 3500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="banner">
      <div className="carousel">
        <ul className="slides">
          {slides.map((slide, index) => (
            <React.Fragment key={slide.id}>
              <input
                type="radio"
                name="radio-buttons"
                id={slide.id}
                checked={currentSlide === index}
                onChange={() => changeSlide(index)}
              />
              <li className="slide-container">
                <div className="slide-image">
                  <img src={slide.src} alt={`Slide ${index + 1}`} />
                </div>
                <div className="carousel-controls">
                  <label htmlFor={slide.prev} className="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label htmlFor={slide.next} className="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
            </React.Fragment>
          ))}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <label
                key={`dot-${index}`}
                htmlFor={slides[index].id}
                className={`carousel-dot ${currentSlide === index ? "active" : ""
                  }`}
                onClick={() => changeSlide(index)}
              ></label>
            ))}
          </div>
        </ul>
      </div>

      <div className="banner-content container">
        <div className='banner-text-content' data-reveal="fade-right">
          <div className="banner-title">Finding your next home? </div>
          <div className="banner-subtitle">We’re here for you.</div>
          <div className="banner-contact">
            <NavLink to="/contact" className="btn btn-primary">
              BOOK NOW
            </NavLink>
          </div>
        </div>
        <div className='banner-image-img-wrap' data-reveal="fade-left" data-reveal-delay="150">
          <div className='image-col'>
            <div className='img-wrap'>
              <img src="../images/verticalSlider/slider1.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider2.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
              <img src="../images/verticalSlider/slider3.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider4.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider5.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider6.jpeg" alt="" />
            </div>
          </div>
          <div className='image-col'>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider7.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
               <img src="../images/verticalSlider/slider8.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider3.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider1.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider2.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
               <img src="../images/verticalSlider/slider3.jpeg" alt="" />
            </div>
          </div>
          <div className='image-col'>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider4.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
               <img src="../images/verticalSlider/slider5.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
               <img src="../images/verticalSlider/slider6.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider7.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
              <img src="../images/verticalSlider/slider8.jpeg" alt="" />
            </div>
            <div className='img-wrap'>
                <img src="../images/verticalSlider/slider2.jpeg" alt="" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
