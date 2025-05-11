import React, { useState, useRef, useEffect } from "react";

const Carousel = ({ children }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [children]);

  return (
    <div className="relative">
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
        <button
          onClick={movePrev}
          className={`bg-white rounded-full p-2 shadow-md mr-4 hover:bg-gray-100 ${
            isDisabled("prev") ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isDisabled("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={moveNext}
          className={`bg-white rounded-full p-2 shadow-md ml-4 hover:bg-gray-100 ${
            isDisabled("next") ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isDisabled("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        ref={carousel}
        className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 py-4 px-2"
      >
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              className="carousel-item text-center relative snap-start flex-shrink-0"
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
