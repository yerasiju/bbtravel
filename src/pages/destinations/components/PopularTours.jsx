import React from "react";
import { Clock, Users, Calendar, MapPin } from "lucide-react";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tour.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/90 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{tour.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{tour.groupSize} чел.</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{tour.availability}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">{tour.price}₽</p>
            <p className="text-sm text-gray-500">за человека</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularTours = () => {
  const tours = [
    {
      id: 1,
      title: "Экскурсия по Золотому кольцу",
      image: "/tours/golden-ring.jpg",
      tags: ["Хит продаж", "Групповой тур"],
      location: "Золотое кольцо России",
      duration: "7 дней",
      groupSize: 15,
      availability: "Ежедневно",
      description:
        "Увлекательное путешествие по древним городам России с посещением главных достопримечательностей и погружением в историю.",
      price: 45000,
    },
    // Другие туры...
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Популярные туры</h2>
          <p className="text-gray-600">
            Исследуйте лучшие направления с нашими экспертами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Показать все туры
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
