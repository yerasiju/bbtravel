// SearchBar.jsx
import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="w-full px-6 py-3 pr-12 rounded-full border-0 shadow-lg text-gray-900 focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
