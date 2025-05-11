import React from "react";

const TravelInspiration = () => {
  const travelArticles = [
    {
      id: 1,
      title: "10 European ski destinations you should visit this winter",
      image: "/src/images/blog/ski-destinations.jpg",
      date: "Jan 06, 2023",
    },
    {
      id: 2,
      title: "Booking travel during Corona: good advice in an uncertain time",
      image: "/src/images/blog/corona-travel.jpg",
      date: "April 06, 2022",
    },
    {
      id: 3,
      title: "Where can I go? 5 amazing countries that open right now",
      image: "/src/images/blog/open-countries.jpg",
      date: "Jan 06, 2023",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Get inspiration for your next trip
        </h2>
        <p className="text-gray-500 text-sm">Interdum et malesuada fames</p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {travelArticles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="mb-4 rounded-lg overflow-hidden h-48 bg-gray-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <h3 className="font-medium text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelInspiration;
