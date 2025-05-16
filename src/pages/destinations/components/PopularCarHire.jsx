import React from "react";
import { Car, Users, Fuel, Settings } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {car.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded">
            -{car.discount}%
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{car.name}</h3>
            <p className="text-sm text-gray-600">{car.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{car.price}₽/день</p>
            {car.oldPrice && (
              <p className="text-sm text-gray-500 line-through">
                {car.oldPrice}₽/день
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span>{car.seats} мест</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-500" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-gray-500" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-gray-500" />
            <span>{car.type}</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Забронировать
        </button>
      </div>
    </div>
  );
};

const PopularCarHire = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      category: "Бизнес класс",
      price: 3500,
      oldPrice: 4000,
      discount: 15,
      image: "/cars/camry.jpg",
      seats: 5,
      transmission: "Автомат",
      fuelType: "Бензин",
      type: "Седан",
    },
    // Другие автомобили...
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные автомобили</h2>
            <p className="text-gray-600">
              Выберите идеальный автомобиль для вашей поездки
            </p>
          </div>
          <button className="text-blue-600 hover:underline">
            Все автомобили
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCarHire;
