"use client";
import { useState, useRef, useEffect } from "react";
import { StarIcon } from "../icons/Icons";

interface Episode {
  episodeTitle: string;
  src: string;
  description: string;
}

interface Slide {
  src: string;
  alt: string;
  title: string;
  rating: string;
  category: string;
  description: string;
  season: string;
  episodes: Episode[];
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerGroup, setSlidesPerGroup] = useState(3);
  const [selectedItem, setSelectedItem] = useState<Slide | null>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += slidesPerGroup) {
    groupedSlides.push(slides.slice(i, i + slidesPerGroup));
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const currentX = e.touches[0].clientX;
    const diff = startX.current - currentX;

    if (diff > 50) {
      goToSlide(Math.min(currentIndex + 1, groupedSlides.length - 1));
      isDragging.current = false;
    } else if (diff < -50) {
      goToSlide(Math.max(currentIndex - 1, 0));
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const updateSlidesPerGroup = () => {
    if (window.innerWidth < 768) {
      setSlidesPerGroup(1);
    } else {
      setSlidesPerGroup(3);
    }
  };

  useEffect(() => {
    updateSlidesPerGroup();
    window.addEventListener("resize", updateSlidesPerGroup);
    return () => {
      window.removeEventListener("resize", updateSlidesPerGroup);
    };
  }, []);

  const handleSlideClick = (slide: Slide) => {
    setSelectedItem(slide);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className='bg-[#1A1A1A] h-auto pl-8 py-8 md:pl-16 md:py-16 pr-0 overflow-hidden'>
      <h1 className='text-2xl text-white' style={{ fontFamily: 'var(--font-avenir-bold)' }}>
        Trending <span className='text-[#FBC94A]'>this week</span>
      </h1>

      {selectedItem ? (
  <div className="relative w-full mt-4">
    <div className="flex space-x-4">
      <div>
        <div className="w-full md:w-[600px] h-[340px] md:h-[700px] relative">
          <img
            src={selectedItem.src}
            alt={selectedItem.alt}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 bg-black bg-opacity-50 rounded-lg">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white text-2xl" style={{ fontFamily: "var(--font-avenir-bold)" }}>
                  {selectedItem.title}
                </h3>
                <p className="text-gray-400 text-xs">Category: {selectedItem.category}</p>
              </div>
              <div className="flex items-center">
                <StarIcon className="w-6 h-6" />
                <div className="text-white text-sm">{selectedItem.rating}</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-sm text-gray-500 mt-4 max-w-[400px]">{selectedItem.description}</p>
      </div>
      
      <div className="flex-1 text-white">
        <div className="flex justify-between">
        <h2 className="text-xl font-bold">Episodes</h2>
        <div>Season 1</div>
        </div>
      
        <ul className="mt-4 space-y-2">
          {selectedItem.episodes.map((episode, index) => (
            <li key={index} className="p-2 rounded-lg flex items-center space-x-4">
              <img
                src={episode.src}
                alt={episode.episodeTitle}
                className="w-[280px]  h-auto object-cover rounded-lg"
              />
              <div className="flex flex-col ">
                <span className="font-semibold">{episode.episodeTitle}</span>
                <div className="text-gray-500 text-sm max-w-[400px]">{episode.description}</div>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
      ) : (
        <div className="relative w-full mt-4 overflow-x-auto">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / groupedSlides.length)}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {groupedSlides.map((group, index) => (
              <div key={index} className="flex flex-1 space-x-4">
                {group.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex-shrink-0 w-full md:w-[740px] h-[340px] relative cursor-pointer "
                    onClick={() => handleSlideClick(slide)}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-1 md:p-4 md:px-8 bg-black bg-opacity-50 rounded-lg">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                        <div>
                          <h3
                            className="text-white text-xs md:text-2xl"
                            style={{ fontFamily: "var(--font-avenir-bold)" }}
                          >
                            {slide.title}
                          </h3>
                          <p className="text-gray-400 text-[10px] md:text-xs">
                            Category: {slide.category}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 md:w-6 md:h-6" />
                          <div className="text-white text-sm">{slide.rating}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
