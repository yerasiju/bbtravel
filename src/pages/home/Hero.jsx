import React, { useState } from "react";
import bgImg from "../../assets/images/bg.jpg";

const Hero = () => {
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    console.log("Запрос пользователя:", message);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-900/70 to-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Find Next Place To Visit
        </h1>
        <p className="mb-8 text-center">
          Discover amazing places at exclusive deals
        </p>

        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-6 text-gray-700 mb-6">
          <button className="hover:text-blue-500 font-medium">Hotel</button>
          <button className="hover:text-blue-500 font-medium">Tour</button>
          <button className="hover:text-blue-500 font-medium">Activity</button>
          <button className="hover:text-blue-500 font-medium">
            Holiday Rentals
          </button>
          <button className="hover:text-blue-500 font-medium">Car</button>
          <button className="hover:text-blue-500 font-medium">Cruise</button>
          <button className="hover:text-blue-500 font-medium">Flights</button>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-full shadow-md flex items-center px-4 py-2 text-gray-700">
          <div className="text-blue-600 font-medium mr-2">Ask AI</div>
          <span className="text-gray-300 mr-2">|</span>
          <input
            type="text"
            placeholder="Спросите меня о чём угодно..."
            className="outline-none px-2 py-2 rounded-full flex-grow"
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
  );
};

export default Hero;
