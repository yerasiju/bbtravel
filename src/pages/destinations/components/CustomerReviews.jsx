import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.location}</p>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{review.rating}</span>
            </div>
          </div>
          <p className="mt-2 text-gray-700">{review.comment}</p>
          <div className="mt-4 flex gap-2">
            {review.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Review ${index + 1}`}
                className="w-20 h-20 rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна М.",
      avatar: "/avatars/anna.jpg",
      location: "Париж, Франция",
      rating: 5,
      comment: "Прекрасный отель с отличным расположением!",
      images: ["/reviews/paris1.jpg", "/reviews/paris2.jpg"],
    },
    // Другие отзывы...
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600">
            Узнайте, что говорят о нас путешественники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
