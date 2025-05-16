import React from "react";
import { Info, Sun, Umbrella, ThermometerSun } from "lucide-react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Погода сегодня</h3>
        <span className="text-sm text-gray-500">{weather.date}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {weather.condition === "sunny" && (
            <Sun className="w-8 h-8 text-yellow-400" />
          )}
          {weather.condition === "rainy" && (
            <Umbrella className="w-8 h-8 text-blue-400" />
          )}
          <span className="text-2xl font-bold ml-2">
            {weather.temperature}°C
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">
            Ощущается как {weather.feelsLike}°C
          </p>
          <p className="text-sm text-gray-600">
            Влажность: {weather.humidity}%
          </p>
        </div>
      </div>
    </div>
  );
};

const LocalInfoCard = ({ info }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Info className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">{info.title}</h3>
          <p className="text-gray-600 text-sm">{info.description}</p>
        </div>
      </div>
    </div>
  );
};

const LocalInfo = () => {
  const weather = {
    date: "13 мая",
    condition: "sunny",
    temperature: 24,
    feelsLike: 26,
    humidity: 65,
  };

  const localInfo = [
    {
      id: 1,
      title: "Местное время",
      description: "UTC+3 (Московское время)",
    },
    {
      id: 2,
      title: "Язык",
      description: "Русский",
    },
    {
      id: 3,
      title: "Валюта",
      description: "Российский рубль (₽)",
    },
    {
      id: 4,
      title: "Транспорт",
      description: "Метро, автобусы, такси",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Полезная информация</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <WeatherCard weather={weather} />
          </div>
          <div className="grid gap-4">
            {localInfo.map((info) => (
              <LocalInfoCard key={info.id} info={info} />
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <ThermometerSun className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold mb-2">Лучшее время для посещения</h3>
              <p className="text-gray-600">
                Май-сентябрь - идеальное время для посещения города. Температура
                комфортная, много солнечных дней и проводится множество
                культурных мероприятий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalInfo;
