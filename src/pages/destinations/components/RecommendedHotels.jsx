import React from "react";
import { Star, Wifi, Coffee, Waves, MapPin } from "lucide-react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
        />
        {hotel.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
            Скидка {hotel.discount}%
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{hotel.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{hotel.location}</span>
            </div>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{hotel.rating}</span>
          </div>
        </div>

        <div className="flex gap-2 my-3">
          {hotel.amenities.includes("wifi") && (
            <Wifi className="w-5 h-5 text-gray-500" />
          )}
          {hotel.amenities.includes("breakfast") && (
            <Coffee className="w-5 h-5 text-gray-500" />
          )}
          {hotel.amenities.includes("pool") && (
            <Waves className="w-5 h-5 text-gray-500" />
          )}
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-2xl font-bold">{hotel.price}₽</p>
            <p className="text-sm text-gray-500">за ночь</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendedHotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Гранд Отель Европа",
      image: "/hotels/grand-hotel.jpg",
      location: "Центр города",
      rating: 4.8,
      price: 12000,
      discount: 15,
      amenities: ["wifi", "breakfast", "pool"],
    },
    // Другие отели...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Рекомендуемые отели</h2>
            <p className="text-gray-600">Лучшие места для вашего отдыха</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Фильтры
            </button>
            <button className="text-blue-600 hover:underline">Все отели</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedHotels;
