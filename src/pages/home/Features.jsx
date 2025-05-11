import React from "react";
import { Shield, Calendar, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Best Price Guarantee",
      description:
        "Find a lower price? We'll refund you 200% of the difference.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-500" />,
      title: "Easy & Quick Booking",
      description: "Book your trip in minutes, hassle-free and secure.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-500" />,
      title: "Customer Care 24/7",
      description: "Round-the-clock assistance for a smooth travel experience.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
