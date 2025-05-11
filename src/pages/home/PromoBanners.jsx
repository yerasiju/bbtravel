import React from "react";
import firstbanner from "/src/assets/images/destinations/thingstodo.jpeg";
import secondbanner from "/src/assets/images/destinations/cartrip.jpeg";

const PromoBanners = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-120 rounded-lg overflow-hidden shadow-md">
          <img
            src={firstbanner}
            alt="Things To Do On Your Trip"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-6">
              Things To Do On
              <br />
              Your Trip
            </h3>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md w-max hover:bg-gray-100 transition font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative h-120 rounded-lg overflow-hidden shadow-md">
          <img
            src={secondbanner}
            alt="Summer Deals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-between p-8">
            <div className="text-white text-sm font-medium mt-4">
              Enjoy Summer Deals
            </div>
            <div>
              <h3 className="text-white text-3xl font-bold mb-6">
                Up to 70% Discount!
              </h3>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-md w-max hover:bg-gray-100 transition font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
