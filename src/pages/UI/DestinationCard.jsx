import React from "react";

const DestinationCard = ({ img, name }) => {
  return (
    <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm">4.8 (120 reviews)</span>
        </div>
        <button className="mt-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
