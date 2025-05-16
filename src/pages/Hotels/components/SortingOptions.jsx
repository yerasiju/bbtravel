import React from "react";

const SortingOptions = () => {
  const [activeSort, setActiveSort] = React.useState("popular");

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">0 отелей найдено</span>
          <span className="text-sm text-[#4C6FFF]">14 Top picks</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="flex items-center">
            <button
              className={`px-4 py-2 text-sm ${
                activeSort === "popular"
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSort("popular")}
            >
              Popular
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeSort === "price_low"
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSort("price_low")}
            >
              Price: Low to High
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeSort === "price_high"
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSort("price_high")}
            >
              Price: High to Low
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeSort === "rating"
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSort("rating")}
            >
              Rating
            </button>
          </div>
        </div>
      </div>

      {/* Error message */}
      <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-md text-sm">
        Не удалось загрузить список отелей
      </div>
    </div>
  );
};

export default SortingOptions;
