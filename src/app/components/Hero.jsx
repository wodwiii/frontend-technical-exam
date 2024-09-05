"use client";

import { useState, useEffect } from 'react';
import slides from '../dummy_data/slides.json';
import HeroText from './HeroText';
import Navbar from './Navbar';
import Footer from './Footer';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Effect for automatic slide switching
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <Navbar />
      <Footer />
      <HeroText 
        title={slides[currentIndex].title}
        rating={slides[currentIndex].rating}
        category={slides[currentIndex].category}
        description={slides[currentIndex].description}
      />
      <div className="md:absolute inset-0 flex items-center justify-center max-w-[100vw]">
        <img
          src={slides[currentIndex].src}
          alt={slides[currentIndex].alt}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Adjusted Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black via-black/90 to-transparent"></div>
      </div>
      {/* Circular navigation indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 md:bottom-16 md:right-16">
        {slides.slice(0, 4).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 rounded-full transition duration-300 ${
              currentIndex === index ? 'bg-secondary w-8' : 'bg-white w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
