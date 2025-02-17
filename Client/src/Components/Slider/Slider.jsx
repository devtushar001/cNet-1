import React, { useEffect, useState } from "react";
import './Slider.css';
import { assets } from "../../assets/escomData";

const Slider = () => {
  const images = [
    assets.slide_one, 
    assets.slide_two, 
    assets.slide_three, 
    assets.slide_four, 
    assets.slide_five, 
    assets.slide_six
  ];

  const [imgIndex, setImgIndex] = useState(0);

  // Update the image index cyclically
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setImgIndex(images.length - 1);
    } else if (newIndex >= images.length) {
      setImgIndex(0);
    } else {
      setImgIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slide">
      {/* Left navigation */}
      <img 
        src={assets.slide_left} 
        onClick={() => updateIndex(imgIndex - 1)} 
        id="left" 
        alt="Previous" 
      />
      
      {/* Images with animation */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} className={index === imgIndex ? "active" : ""} />
      ))}

      {/* Right navigation */}
      <img src={assets.slide_right} onClick={() => updateIndex(imgIndex + 1)} id="right"  alt="Next" />
      <button id="visit-now">Visit Now.</button>
    </div>
  );
};

export default Slider;
