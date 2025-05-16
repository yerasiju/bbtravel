// HotelFilters.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

const FilterButton = ({ label }) => (
  <button className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 flex items-center gap-2">
    {label}
    <ChevronDown className="w-4 h-4" />
  </button>
);

const HotelFilters = () => {
  return (
    <div className="flex gap-3 items-center">
      <span className="text-gray-700 font-medium">Filter</span>
      <div className="flex gap-2">
        <FilterButton label="Price" />
        <FilterButton label="Amenities" />
        <FilterButton label="Style" />
        <FilterButton label="Star Rating" />
        <FilterButton label="Neighborhood" />
      </div>
    </div>
  );
};

export default HotelFilters;
