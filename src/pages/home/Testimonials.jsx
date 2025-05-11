import React, { useRef, useState, useEffect } from "react";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Annette Black",
      position: "UX / UI Designer",
      avatar: "/src/images/avatars/annette-black.jpg",
      text: "The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests. Really a nice place.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      avatar: "/src/images/avatars/michael-chen.jpg",
      text: "We had an amazing stay. The apartment was clean, spacious and in an excellent location. The host was very attentive and responded quickly to all our questions.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Marketing Specialist",
      avatar: "/src/images/avatars/emma-rodriguez.jpg",
      text: "Fantastic experience from start to finish. The check-in process was smooth, the location was perfect for our needs, and the amenities were exactly as described.",
    },
  ];

  const totalTestimonials = testimonials.length;

  // Handle automatic scrolling when activeIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = activeIndex * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Handle manual scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const scrollPosition = scrollContainerRef.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / containerWidth);

        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(Math.min(totalTestimonials - 1, activeIndex + 1));
  };

  const renderRatingStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-blue-500 text-sm">
          ★
        </span>
      ));
  };

  return (
    <div className="bg-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Stats and Title */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              What our customers are saying us?
            </h2>
            <p className="text-gray-600 text-sm mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo.
            </p>

            <div className="flex items-start space-x-16 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">13m+</h3>
                <p className="text-gray-600 text-sm">Happy People</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">4.88</h3>
                <p className="text-gray-600 text-sm">Overall rating</p>
                <div className="flex mt-1">{renderRatingStars()}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonials Slider */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto hide-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 snap-center"
                    style={{ minWidth: "100%" }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-pink-200">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center mt-8">
              <div className="text-gray-700 text-sm mr-2">
                0{activeIndex + 1}
              </div>
              <div className="flex-grow mx-2">
                <div className="h-0.5 bg-gray-300 relative">
                  <div
                    className="h-0.5 bg-gray-700 absolute top-0 left-0 transition-all duration-300"
                    style={{
                      width: `${
                        (activeIndex + 1) * (100 / totalTestimonials)
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-gray-700 text-sm ml-2">
                0{totalTestimonials}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .snap-x {
          scroll-snap-type: x mandatory;
        }

        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
