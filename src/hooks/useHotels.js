import { useState, useEffect } from "react";

const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    priceRange: [0, 50000],
    rating: "",
    amenities: [],
  });

  const [sortOption, setSortOption] = useState("recommended");

  // Загрузка отелей
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        // Здесь должен быть ваш API запрос
        const response = await fetch("/api/hotels");
        const data = await response.json();
        setHotels(data);
      } catch (err) {
        setError("Не удалось загрузить список отелей");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // Применение фильтров и сортировки
  useEffect(() => {
    let result = [...hotels];

    // Применение фильтров
    if (filters.search) {
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          hotel.location.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.rating) {
      result = result.filter((hotel) => hotel.rating >= Number(filters.rating));
    }

    if (filters.amenities?.length) {
      result = result.filter((hotel) =>
        filters.amenities.every((amenity) => hotel.amenities.includes(amenity))
      );
    }

    result = result.filter(
      (hotel) =>
        hotel.price >= filters.priceRange[0] &&
        hotel.price <= filters.priceRange[1]
    );

    // Применение сортировки
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'recommended' - можно добавить свою логику сортировки
        break;
    }

    setFilteredHotels(result);
  }, [hotels, filters, sortOption]);

  return {
    hotels: filteredHotels,
    loading,
    error,
    filters,
    setFilters,
    sortOption,
    setSortOption,
  };
};

export default useHotels;
