import React from "react";
import bgImage from "../../assets/images/bg.webp";

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
            placeholder="Location Where are you going"
            className="outline-none px-4 py-2 rounded-full w-[250px]"
          />
          <input
            type="text"
            placeholder="Check in - Check out"
            className="outline-none px-4 py-2 rounded-full w-[200px] ml-2"
          />
          <input
            type="text"
            placeholder="Guest"
            className="outline-none px-4 py-2 rounded-full w-[200px] ml-2"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 ml-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
