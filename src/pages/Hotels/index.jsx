// index.jsx
import React from "react";
import SearchBar from "./components/SearchBar";
import HotelFilters from "./components/HotelFilters";
import HotelList from "./components/HotelList";
import SortingOptions from "./components/SortingOptions";

const HotelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-balloons.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Find Your Dream Luxury Hotel
          </h1>
          <div className="w-full max-w-3xl px-4">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <HotelFilters />
            <div className="text-sm text-blue-600">
              Top picks for your search
            </div>
          </div>
          <HotelList />
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
