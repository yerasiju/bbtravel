import React, { useState, useRef } from "react";
import bgImage from "../../assets/images/bg.jpg";
import london from "../../assets/images/destinations/london.jpeg";
import barcelona from "../../assets/images/destinations/barcelona.jpeg";
import sydney from "../../assets/images/destinations/sydney.jpeg";
import rome from "../../assets/images/destinations/rome.jpeg";
import newyork from "../../assets/images/destinations/newyork.jpeg";
import thingsToDoImg from "../../assets/images/destinations/thingstodo.jpeg";
import summerDealsImg from "../../assets/images/destinations/cartrip.jpeg";
import hotel1 from "../../assets/images/destinations/newyork.jpeg";
import hotel2 from "../../assets/images/destinations/newyork.jpeg";
import hotel3 from "../../assets/images/destinations/newyork.jpeg";
import hotel4 from "../../assets/images/destinations/newyork.jpeg";

const HomePage = () => {
  const [message, setMessage] = useState("");
  const carouselRef = useRef(null);
  const hotelsRef = useRef(null);

  const handleSearch = () => {
    console.log("Запрос пользователя:", message);
  };

  const scrollCarousel = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const destinations = [
    { img: newyork, name: "New York" },
    { img: london, name: "London" },
    { img: barcelona, name: "Barcelona" },
    { img: sydney, name: "Sydney" },
    { img: rome, name: "Rome" },
    { img: newyork, name: "New York" },
    { img: london, name: "London" },
    { img: barcelona, name: "Barcelona" },
  ];

  const hotels = [
    {
      img: hotel1,
      name: "The Montcalm At Brewery London City",
      location: "Westminster Borough, London",
      rating: "4.7",
      reviews: "3014",
      price: "US$72",
      tag: "BREAKFAST INCLUDED",
    },
    {
      img: hotel2,
      name: "Staycity Aparthotels Deptford Bridge Station",
      location: "Ciutat Vella, Barcelona",
      rating: "4.8",
      reviews: "2345",
      price: "US$85",
      tag: "",
    },
    {
      img: hotel3,
      name: "The Westin New York at Times Square West",
      location: "Manhattan, New York",
      rating: "4.7",
      reviews: "3014",
      price: "US$68",
      tag: "BEST SELLER",
    },
    {
      img: hotel4,
      name: "DoubleTree by Hilton Hotel New York Times Square West",
      location: "Vaticano Prati, Rome",
      rating: "4.5",
      reviews: "5633",
      price: "US$89",
      tag: "TOP RATED",
    },
    {
      img: hotel1,
      name: "The Montcalm At Brewery London City",
      location: "Westminster Borough, London",
      rating: "4.7",
      reviews: "3014",
      price: "US$72",
      tag: "BREAKFAST INCLUDED",
    },
    {
      img: hotel2,
      name: "Staycity Aparthotels Deptford Bridge Station",
      location: "Ciutat Vella, Barcelona",
      rating: "4.8",
      reviews: "2345",
      price: "US$85",
      tag: "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-purple-900/60 to-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4">Find Next Place To Visit</h1>
          <p className="mb-8">Discover amazing places at exclusive deals</p>

          <div className="bg-white rounded-full shadow-lg px-6 py-2 flex items-center space-x-4 text-gray-700">
            <nav className="flex space-x-4">
              <button className="hover:text-blue-500">Hotel</button>
              <button className="hover:text-blue-500">Tour</button>
              <button className="hover:text-blue-500">Activity</button>
              <button className="hover:text-blue-500">Holiday Rentals</button>
              <button className="hover:text-blue-500">Car</button>
              <button className="hover:text-blue-500">Cruise</button>
              <button className="hover:text-blue-500">Flights</button>
            </nav>
          </div>

          <div className="mt-6 bg-white rounded-full shadow-md flex items-center px-4 py-2 text-gray-700">
            <input
              type="text"
              placeholder="Ask AI | Спросите меня о чём угодно..."
              className="outline-none px-4 py-2 rounded-full w-[500px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 ml-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Popular Destinations
            </h2>
            <p className="text-gray-600 mt-1">
              These popular destinations have a lot to offer
            </p>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg">
            View All Destinations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            onClick={() => scrollCarousel("left", carouselRef)}
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

          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((city, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden"
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                  {city.name}
                </p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            onClick={() => scrollCarousel("right", carouselRef)}
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

        <hr className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={thingsToDoImg}
              alt="Things To Do"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-10 left-10">
              <h3 className="text-white text-3xl font-bold mb-4">
                Things To Do On
                <br />
                Your Trip
              </h3>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={summerDealsImg}
              alt="Summer Deals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-10 left-10">
              <h3 className="text-white text-3xl font-bold mb-4">
                Enjoy Summer Deals
              </h3>
              <p className="text-white text-3xl font-bold mb-4">
                Up to 70% Discount!
              </p>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Recommended</h2>
              <p className="text-gray-600 text-sm mt-1">
                Interdum et malesuada fames ac ante ipsum
              </p>
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-700 cursor-pointer focus:outline-none">
                <option>Hotel</option>
                <option>Apartment</option>
                <option>Resort</option>
                <option>Villa</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
              onClick={() => scrollCarousel("left", hotelsRef)}
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

            <div
              ref={hotelsRef}
              className="flex space-x-5 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {hotels.map((hotel, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="relative rounded-lg overflow-hidden h-48 mb-3">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    {hotel.tag && (
                      <div
                        className={`absolute top-3 left-3 text-white text-xs font-bold py-1 px-2 ${
                          hotel.tag === "BEST SELLER"
                            ? "bg-blue-500"
                            : hotel.tag === "TOP RATED"
                            ? "bg-yellow-500"
                            : "bg-blue-900"
                        }`}
                      >
                        {hotel.tag}
                      </div>
                    )}
                    <button className="absolute top-3 right-3 bg-white rounded-full p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center bg-blue-600 text-white text-sm font-bold rounded w-8 h-6 mr-2">
                      {hotel.rating}
                    </div>
                    <span className="text-sm font-semibold">Exceptional</span>
                    <span className="text-sm text-gray-500 ml-1">
                      {hotel.reviews} reviews
                    </span>
                  </div>
                  <p className="text-sm">
                    Starting from{" "}
                    <span className="text-blue-600 font-semibold">
                      {hotel.price}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
              onClick={() => scrollCarousel("right", hotelsRef)}
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

          <div className="flex justify-center items-center mt-8">
            <button className="text-gray-400 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <button className="text-gray-600 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
