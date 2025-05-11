import React, { useRef, useState } from "react";
import newyork from "/src/assets/images/destinations/newyork.jpeg";
import london from "/src/assets/images/destinations/london.jpeg";
import rome from "/src/assets/images/destinations/rome.jpeg";
import barcelona from "/src/assets/images/destinations/barcelona.jpeg";
import sydney from "/src/assets/images/destinations/sydney.jpeg";

const PopularDestinations = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const destinations = [
    {
      id: 1,
      name: "New York",
      image: newyork,
      hotels: 22,
      cars: 18,
      tours: 12,
      activities: 80,
    },
    {
      id: 2,
      name: "London",
      image: london,
      hotels: 14,
      cars: 22,
      tours: 18,
      activities: 95,
    },
    {
      id: 3,
      name: "Barcelona",
      image: barcelona,
      hotels: 32,
      cars: 15,
      tours: 24,
      activities: 68,
    },
    {
      id: 4,
      name: "Sydney",
      image: sydney,
      hotels: 18,
      cars: 12,
      tours: 10,
      activities: 55,
    },
    {
      id: 5,
      name: "Rome",
      image: rome,
      hotels: 26,
      cars: 14,
      tours: 16,
      activities: 62,
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 border-b border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Popular Destinations
          </h2>
          <p className="text-gray-600 text-sm">
            These popular destinations have a lot to offer
          </p>
        </div>
        <a href="#" className="text-blue-600 text-sm flex items-center">
          View All Destinations
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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
        </a>
      </div>

      <div className="relative">
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
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
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 py-2 scrollbar-hide scroll-smooth"
        >
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-md group relative"
            >
              <div className="relative h-96">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                  <h3 className="text-2xl font-semibold">{destination.name}</h3>
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-opacity duration-300">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium">
                      {destination.hotels} Hotel - {destination.cars} Cars -{" "}
                      {destination.tours} Tours - {destination.activities}{" "}
                      Activity
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {destination.name}
                    </h3>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
                      Discover
                    </button>
                  </div>
                  <div className="p-4"></div>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
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
        )}
      </div>
    </div>
  );
};

export default PopularDestinations;
