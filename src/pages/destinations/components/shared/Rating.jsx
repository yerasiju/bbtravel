import React from "react";
import { Star } from "lucide-react";

const Rating = ({ value, reviews, size = "md", showCount = true }) => {
  const sizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <Star className={`${sizes[size]} text-yellow-400 fill-current`} />
      <span className="font-medium">{value}</span>
      {showCount && reviews && (
        <span className="text-gray-500 text-sm">({reviews} отзывов)</span>
      )}
    </div>
  );
};

export default Rating;
