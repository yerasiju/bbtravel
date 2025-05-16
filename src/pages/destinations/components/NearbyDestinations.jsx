import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Hotel,
  Car,
  Plane,
  Activity,
  Ship,
  Building,
  Navigation,
  Map,
  X,
} from "lucide-react";

// Для реальной интеграции вам нужно будет получить свой API ключ Mapbox
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoicm9tYWJveTEyIiwiYSI6ImNtOWN3bzJmdjBuY3Eya3NhdmQzcW92dzkifQ.YCWRB3usCdTRDNOkrun9xg";
const OPENWEATHER_API_KEY = "c9dc7d554d664f86b0a93329251405";

const CITIES = [
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    description:
      "London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that's the envy of other global superpowers.",
    landmarks: [
      "British Museum",
      "Buckingham Palace",
      "Westminster Abbey",
      "Big Ben",
      "London Eye",
      "Tower Bridge",
    ],
    culture: [
      "National Gallery",
      "Tate Modern",
      "West End",
      "Abbey Road",
      "Royal Albert Hall",
      "Oxford Street",
      "Westfield Shopping Centers",
    ],
    coordinates: { lat: 51.5074, lon: -0.1278 },
    currency: "GBP",
    timezone: "GMT +00:00",
    bestMonth: "JUN",
    bestEvent: "The Queen's Birthday",
    image: "https://source.unsplash.com/featured/?london,city",
    landmarkCoordinates: [
      { name: "British Museum", lat: 51.5194, lon: -0.1269 },
      { name: "Buckingham Palace", lat: 51.5014, lon: -0.1419 },
      { name: "Westminster Abbey", lat: 51.4994, lon: -0.1276 },
      { name: "Big Ben", lat: 51.5007, lon: -0.1246 },
      { name: "London Eye", lat: 51.5033, lon: -0.1195 },
      { name: "Tower Bridge", lat: 51.5055, lon: -0.0754 },
    ],
    suggestedRoute: [
      { lat: 51.5194, lon: -0.1269 }, // British Museum
      { lat: 51.5014, lon: -0.1419 }, // Buckingham Palace
      { lat: 51.4994, lon: -0.1276 }, // Westminster Abbey
      { lat: 51.5007, lon: -0.1246 }, // Big Ben
      { lat: 51.5033, lon: -0.1195 }, // London Eye
      { lat: 51.5055, lon: -0.0754 }, // Tower Bridge
    ],
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description:
      "The City of Light dazzles with its iconic architecture, world-class art museums, and charming café culture. Paris represents the perfect blend of history, culture, and modern sophistication.",
    landmarks: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
      "Palace of Versailles",
      "Sacré-Cœur",
    ],
    culture: [
      "Musée d'Orsay",
      "Champs-Élysées",
      "Le Marais",
      "Paris Fashion Week",
      "French Cuisine",
      "Montmartre",
    ],
    coordinates: { lat: 48.8566, lon: 2.3522 },
    currency: "EUR",
    timezone: "GMT +01:00",
    bestMonth: "APR",
    bestEvent: "Paris Art Week",
    image: "https://source.unsplash.com/featured/?paris,city",
    landmarkCoordinates: [
      { name: "Eiffel Tower", lat: 48.8584, lon: 2.2945 },
      { name: "Louvre Museum", lat: 48.8606, lon: 2.3376 },
      { name: "Notre-Dame Cathedral", lat: 48.853, lon: 2.3499 },
      { name: "Arc de Triomphe", lat: 48.8738, lon: 2.295 },
      { name: "Sacré-Cœur", lat: 48.8867, lon: 2.3431 },
    ],
    suggestedRoute: [
      { lat: 48.8606, lon: 2.3376 }, // Louvre Museum
      { lat: 48.853, lon: 2.3499 }, // Notre-Dame
      { lat: 48.8867, lon: 2.3431 }, // Sacré-Cœur
      { lat: 48.8738, lon: 2.295 }, // Arc de Triomphe
      { lat: 48.8584, lon: 2.2945 }, // Eiffel Tower
    ],
  },
  // Другие существующие города...
  {
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    description:
      "Moscow is a vibrant metropolis that seamlessly blends historical grandeur with modern urban life. As Russia's capital, it showcases magnificent architecture, rich cultural traditions, and a dynamic contemporary scene.",
    landmarks: [
      "Red Square",
      "Kremlin",
      "St. Basil's Cathedral",
      "Bolshoi Theatre",
      "Tretyakov Gallery",
      "Gorky Park",
    ],
    culture: [
      "Russian Ballet",
      "Arbat Street",
      "Moscow Metro",
      "GUM Department Store",
      "Russian Cuisine",
      "Izmailovsky Market",
      "Pushkin Museum",
    ],
    coordinates: { lat: 55.7558, lon: 37.6173 },
    currency: "RUB",
    timezone: "GMT +03:00",
    bestMonth: "MAY",
    bestEvent: "Victory Day Celebrations",
    image: "https://source.unsplash.com/featured/?moscow,city",
    landmarkCoordinates: [
      { name: "Red Square", lat: 55.7539, lon: 37.6208 },
      { name: "Kremlin", lat: 55.752, lon: 37.6175 },
      { name: "St. Basil's Cathedral", lat: 55.7525, lon: 37.6231 },
      { name: "Bolshoi Theatre", lat: 55.7601, lon: 37.6186 },
      { name: "Tretyakov Gallery", lat: 55.7415, lon: 37.6208 },
      { name: "Gorky Park", lat: 55.7298, lon: 37.6019 },
    ],
    suggestedRoute: [
      { lat: 55.7539, lon: 37.6208 }, // Red Square
      { lat: 55.752, lon: 37.6175 }, // Kremlin
      { lat: 55.7525, lon: 37.6231 }, // St. Basil's Cathedral
      { lat: 55.7601, lon: 37.6186 }, // Bolshoi Theatre
      { lat: 55.7415, lon: 37.6208 }, // Tretyakov Gallery
      { lat: 55.7298, lon: 37.6019 }, // Gorky Park
    ],
  },
];

const NearbyDestinations = () => {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [weather, setWeather] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetailedMap, setShowDetailedMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const detailedMapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${OPENWEATHER_API_KEY}&q=${selectedCity.coordinates.lat},${selectedCity.coordinates.lon}&aqi=no`
        );
        const weatherData = await weatherResponse.json();

        const exchangeResponse = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        const exchangeData = await exchangeResponse.json();

        setWeather({
          main: {
            temp: weatherData.current.temp_c,
          },
          weather: [
            {
              description: weatherData.current.condition.text,
              icon: weatherData.current.condition.icon.split("/").pop(),
            },
          ],
        });
        setExchangeRate(exchangeData.rates[selectedCity.currency]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Загружаем скрипт Mapbox
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js";
    script.async = true;
    script.onload = () => {
      setMapLoaded(true);
    };
    document.body.appendChild(script);

    // Загружаем стили Mapbox
    const link = document.createElement("link");
    link.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, [selectedCity]);

  // Инициализация маленькой карты
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    const mapboxgl = window.mapboxgl;
    if (!mapboxgl) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [selectedCity.coordinates.lon, selectedCity.coordinates.lat],
      zoom: 12,
    });

    // Добавляем маркер центра города
    new mapboxgl.Marker({ color: "#3b82f6" })
      .setLngLat([selectedCity.coordinates.lon, selectedCity.coordinates.lat])
      .addTo(map);

    // Добавляем маркеры достопримечательностей
    selectedCity.landmarkCoordinates.slice(0, 3).forEach((landmark) => {
      new mapboxgl.Marker({ color: "#ef4444" })
        .setLngLat([landmark.lon, landmark.lat])
        .setPopup(new mapboxgl.Popup().setText(landmark.name))
        .addTo(map);
    });

    return () => map.remove();
  }, [selectedCity, mapLoaded]);

  // Инициализация детальной карты
  useEffect(() => {
    if (!mapLoaded || !detailedMapRef.current || !showDetailedMap) return;

    const mapboxgl = window.mapboxgl;
    if (!mapboxgl) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: detailedMapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [selectedCity.coordinates.lon, selectedCity.coordinates.lat],
      zoom: 12,
    });

    // Добавляем маркер центра города
    new mapboxgl.Marker({ color: "#3b82f6" })
      .setLngLat([selectedCity.coordinates.lon, selectedCity.coordinates.lat])
      .setPopup(new mapboxgl.Popup().setText(`${selectedCity.name} Center`))
      .addTo(map);

    // Добавляем маркеры достопримечательностей
    selectedCity.landmarkCoordinates.forEach((landmark) => {
      new mapboxgl.Marker({ color: "#ef4444" })
        .setLngLat([landmark.lon, landmark.lat])
        .setPopup(new mapboxgl.Popup().setText(landmark.name))
        .addTo(map);
    });

    // Добавляем маршрут
    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: selectedCity.suggestedRoute.map((point) => [
              point.lon,
              point.lat,
            ]),
          },
        },
      });

      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3b82f6",
          "line-width": 4,
          "line-dasharray": [2, 1],
        },
      });
    });

    return () => map.remove();
  }, [selectedCity, mapLoaded, showDetailedMap]);

  // Функция для рендеринга детализированной карты
  const renderDetailedMap = () => {
    if (!showDetailedMap) return null;

    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              {selectedCity.name} - Достопримечательности и маршрут
            </h3>
            <button
              onClick={() => setShowDetailedMap(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4">
            <div className="bg-gray-100 h-[500px] rounded-lg mb-4 relative">
              {/* Mapbox карта */}
              <div
                id="detailed-map"
                ref={detailedMapRef}
                className="w-full h-full rounded-lg"
              ></div>

              {/* Если карта не загрузилась */}
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-500">Загрузка карты...</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Рекомендуемый маршрут</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  {selectedCity.landmarks.map((landmark, idx) => (
                    <li key={idx} className="text-sm">
                      {landmark}
                      {idx < selectedCity.landmarks.length - 1 && (
                        <span className="text-gray-400 ml-2">→</span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Культурные места</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedCity.culture.slice(0, 5).map((place, idx) => (
                    <li key={idx} className="text-sm">
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h4 className="font-semibold mb-2">Транспортные опции</h4>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-1" />
                  <span className="text-sm">Такси</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-4 h-4 mr-1" />
                  <span className="text-sm">Пешком</span>
                </div>
                <div className="flex items-center">
                  <Ship className="w-4 h-4 mr-1" />
                  <span className="text-sm">Водный транспорт</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation - соответствует изображению */}
      <div className="bg-white border-b py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <span>Europe</span>
            <span className="mx-1">{">"}</span>
            <span>United Kingdom (UK)</span>
            <span className="mx-1">{">"}</span>
            <span className="font-medium">{selectedCity.name}</span>
            <div className="flex-grow"></div>
            <span className="text-right">
              {selectedCity.name} Tourism: Best of {selectedCity.name}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src={selectedCity.image}
          alt={selectedCity.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
            <h1 className="text-4xl font-bold text-white mb-2">
              Explore {selectedCity.name}
            </h1>
            <p className="text-white/80">
              Explore deals, travel guides and things to do in{" "}
              {selectedCity.name}
            </p>
          </div>
        </div>

        {/* Photo Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
          See All 90 Photos
        </div>
      </div>

      {/* Activity Icons */}
      <div className="bg-white border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-7 divide-x">
            <div className="flex flex-col items-center py-4">
              <Building className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Hotel</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <MapPin className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Tour</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <Activity className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Activity</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <Building className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Holiday Rentals</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <Car className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Car</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <Ship className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Cruise</span>
            </div>
            <div className="flex flex-col items-center py-4">
              <Plane className="w-6 h-6 text-gray-600 mb-2" />
              <span className="text-sm">Flights</span>
            </div>
          </div>
        </div>
      </div>

      {/* City Selection */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-8 overflow-x-auto pb-4 mb-4">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city)}
              className={`flex-shrink-0 pb-2 border-b-2 transition-colors ${
                selectedCity.id === city.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* City Information */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              What to know before visiting {selectedCity.name}
            </h2>
            <p className="text-gray-600 mb-6">{selectedCity.description}</p>

            <p className="text-gray-600 mb-6">
              Take the opportunity to acquaint yourself with its fascinating
              history chronicled by institutions like the British Museum as well
              as see how far it has come by simply riding the Tube and passing
              by celebrated landmarks like Buckingham Palace, Westminster Abbey,
              and marvels like Big Ben, the London Eye, and the Tower Bridge.
            </p>

            <p className="text-gray-600 mb-6">
              You can also immerse yourself in it's ever-evolving and impactful
              culture by visiting places like the National Gallery, the Tate
              Modern, West End, Abbey Road, the Royal Albert Hall, Oxford Street
              and the Westfield Shopping Centers, and areas referenced and seen
              in literature and film.
            </p>

            <button className="text-blue-600 font-medium mb-8">
              Show More
            </button>

            {/* Weather Section - ORIGINAL DESIGN */}
            <h3 className="text-lg font-semibold mb-4">Local weather</h3>
            <div className="bg-white rounded-lg shadow p-4 mb-8">
              {loading ? (
                <div className="flex justify-center items-center h-24">
                  <span className="text-gray-500">Loading weather data...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-6">
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      className="w-16 h-16"
                    />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">
                      {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="text-gray-500 capitalize">
                      {weather.weather[0].description}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* General Info */}
            <h3 className="text-lg font-semibold mb-4">General info</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-gray-600">Time Zone</p>
                <p className="font-semibold">{selectedCity.timezone}</p>
                <p className="text-sm text-gray-500">3 hours behind</p>
              </div>
              <div>
                <p className="text-gray-600">Currency</p>
                <p className="font-semibold">{selectedCity.currency}</p>
                <p className="text-sm text-gray-500">
                  1USD = {exchangeRate ? exchangeRate.toFixed(2) : "..."}
                  {selectedCity.currency}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Best time to visit</p>
                <p className="font-semibold">{selectedCity.bestMonth}</p>
                <p className="text-sm text-gray-500">
                  {selectedCity.bestEvent}
                </p>
              </div>
            </div>

            {/* Landmarks Section */}
            <h3 className="text-lg font-semibold mb-4">Top landmarks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {selectedCity.landmarks.slice(0, 6).map((landmark, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="h-32 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-gray-500">{landmark}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm">{landmark}</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {"★".repeat(4)}
                        {"☆".repeat(1)}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        1,234 reviews
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section - Enhanced with Mapbox API */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="bg-gray-200 h-64 rounded-lg relative">
              {/* Mapbox карта */}
              <div
                id="map"
                ref={mapRef}
                className="w-full h-full rounded-lg"
              ></div>

              {/* Если карта не загрузилась */}
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-500">Загрузка карты...</span>
                </div>
              )}
            </div>

            {/* Ближайшие достопримечательности */}
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Nearby attractions</h4>
              <ul className="space-y-2">
                {selectedCity.landmarks.slice(0, 3).map((landmark, idx) => (
                  <li key={idx} className="flex items-start">
                    <MapPin className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{landmark}</p>
                      <p className="text-xs text-gray-500">
                        {(idx + 1) * 0.5} km away
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t">
                <button
                  onClick={() => setShowDetailedMap(true)}
                  className="text-blue-600 text-sm font-medium flex items-center"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  View suggested route
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с детализированной картой */}
      {renderDetailedMap()}
    </div>
  );
};

export default NearbyDestinations;
