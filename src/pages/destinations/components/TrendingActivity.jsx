import React from "react";
import { Clock, Star, MapPin } from "lucide-react";

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
        />
        {activity.badge && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {activity.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{activity.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">{activity.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{activity.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <Clock className="w-4 h-4" />
          <span>{activity.duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">{activity.price}₽</p>
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

const TrendingActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Экскурсия по историческому центру",
      image: "/activities/city-tour.jpg",
      badge: "Топ продаж",
      rating: 4.8,
      location: "Санкт-Петербург",
      duration: "3 часа",
      price: 1500,
    },
    // Другие активности...
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Популярные активности</h2>
          <p className="text-gray-600">
            Исследуйте лучшие впечатления в городе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Показать больше активностей
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingActivity;
