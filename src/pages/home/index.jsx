import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import PopularDestinations from "./PopularDestinations";
import PromoBanners from "./PromoBanners";
import RecommendedHotels from "./RecommendedHotels";
import Testimonials from "./Testimonials";
import TravelBlog from "./TravelBlog";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <PopularDestinations />
      <PromoBanners />
      <RecommendedHotels />
      <Features />
      <Testimonials />
      <TravelBlog />
    </div>
  );
};

export default HomePage;
