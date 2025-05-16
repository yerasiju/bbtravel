import React from "react";
import { Bed, Bath, Square, Star } from "lucide-react";

const RentalCard = ({ rental }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={rental.image}
          alt={rental.title}
          className="w-full h-64 object-cover"
        />
        {rental.type && (
          <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm">
            {rental.type}
          </span>
        )}
        {rental.isFeatured && (
          <span className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
            Популярное
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{rental.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">{rental.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{rental.location}</p>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{rental.beds} кров.</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{rental.baths} ван.</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{rental.area} м²</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-2xl font-bold">{rental.price}₽</p>
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

const FeaturedRentals = () => {
  const rentals = [
    {
      id: 1,
      title: "Современные апартаменты в центре",
      type: "Апартаменты",
      image: "/rentals/apartment1.jpg",
      rating: 4.9,
      location: "Центральный район",
      beds: 2,
      baths: 1,
      area: 65,
      price: 5000,
      isFeatured: true,
    },
    // Другие объекты...
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Лучшие предложения</h2>
            <p className="text-gray-600">
              Выберите идеальное место для проживания
            </p>
          </div>
          <button className="text-blue-600 hover:underline">
            Все варианты
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRentals;
