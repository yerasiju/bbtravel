// HotelList.jsx
import React from "react";
import { Heart } from "lucide-react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        {hotel.type && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
            {hotel.type}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            Exceptional
          </div>
          <span className="text-sm text-gray-600">{hotel.reviews} reviews</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">Starting from</div>
          <div className="font-bold text-lg">${hotel.price}</div>
        </div>
      </div>
    </div>
  );
};

const HotelList = () => {
  const hotels = [
    {
      id: 1,
      name: "The Montcalm At Brewery London City",
      location: "Westminster Borough, London",
      image: "/images/hotel1.jpg",
      type: "BREAKFAST INCLUDED",
      reviews: "2,045",
      price: "72",
    },
    // Add more hotel data as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
