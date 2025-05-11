import React, { useRef, useState } from "react";
import { Heart } from "lucide-react";

const RecommendedHotels = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hotels = [
    {
      id: 1,
      name: "The Montcalm At Brewery London City",
      location: "Westminster Borough, London",
      rating: 4.7,
      ratingText: "Exceptional",
      reviews: 3014,
      price: 72,
      image: "/src/assets/images/hotels/montcalm.jpg",
    },
    {
      id: 2,
      name: "Staycity Aparthotels Deptford Bridge Station",
      location: "Ciutat Vella, Barcelona",
      rating: 4.8,
      ratingText: "Exceptional",
      reviews: 2345,
      price: 85,
      image: "/src/assets/images/hotels/staycity.jpg",
    },
    {
      id: 3,
      name: "The Westin New York at Times Square West",
      location: "Manhattan, New York",
      rating: 4.7,
      ratingText: "Exceptional",
      reviews: 3014,
      price: 68,
      image: "/src/assets/images/hotels/westin.jpg",
    },
    {
      id: 4,
      name: "DoubleTree by Hilton Hotel New York Times Square West",
      location: "Vaticano Prati, Rome",
      rating: 4.5,
      ratingText: "Exceptional",
      reviews: 5633,
      price: 89,
      image: "/src/assets/images/hotels/doubletree.jpg",
    },
    {
      id: 5,
      name: "The Montcalm At Brewery London City",
      location: "Westminster Borough, London",
      rating: 4.7,
      ratingText: "Exceptional",
      reviews: 3014,
      price: 72,
      image: "/src/assets/images/hotels/montcalm.jpg",
    },
    {
      id: 6,
      name: "Staycity Aparthotels Deptford Bridge Station",
      location: "Ciutat Vella, Barcelona",
      rating: 4.8,
      ratingText: "Exceptional",
      reviews: 2345,
      price: 85,
      image: "/src/assets/images/hotels/staycity.jpg",
    },
    {
      id: 7,
      name: "The Westin New York at Times Square West",
      location: "Manhattan, New York",
      rating: 4.7,
      ratingText: "Exceptional",
      reviews: 3014,
      price: 68,
      image: "/src/assets/images/hotels/westin.jpg",
    },
    {
      id: 8,
      name: "DoubleTree by Hilton Hotel New York Times Square West",
      location: "Vaticano Prati, Rome",
      rating: 4.5,
      ratingText: "Exceptional",
      reviews: 5633,
      price: 89,
      image: "/src/assets/images/hotels/doubletree.jpg",
    },
  ];

  const totalPages = Math.ceil(hotels.length / 4);
  const dots = Array.from({ length: totalPages }, (_, i) => i);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setActiveIndex((prev) =>
        prev < totalPages - 1 ? prev + 1 : totalPages - 1
      );
    }
  };

  const scrollToPage = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Recommended</h2>
          <p className="text-gray-500 text-sm mt-1">
            Interdum et malesuada fames ac ante ipsum
          </p>
        </div>
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-md pl-4 pr-10 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 cursor-pointer">
            <option>Hotel</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 w-max">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="w-64 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{hotel.location}</p>
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-700 text-white text-xs font-bold rounded px-1.5 py-0.5 mr-2">
                      {hotel.rating}
                    </div>
                    <span className="text-sm font-medium">
                      {hotel.ratingText}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {hotel.reviews} reviews
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="ml-1 font-bold text-blue-700">
                      US${hotel.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          onClick={scrollLeft}
          className="mr-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <div className="flex space-x-2">
          {dots.map((dot, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeIndex === index ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="ml-4 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RecommendedHotels;
