import React from "react";

import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FAQ";
import NearbyDestinations from "./components/NearbyDestinations";
import PopularCarHire from "./components/PopularCarHire";
import TrendingActivity from "./components/TrendingActivity";
import FeaturedRentals from "./components/FeaturedRentals";
import RecommendedHotels from "./components/RecommendedHotels";
import PopularTours from "./components/PopularTours";
import LocalInfo from "./components/LocalInfo";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NearbyDestinations />

      <div className="container mx-auto px-4 space-y-16 py-12">
        <CustomerReviews />
        <FAQ />

        <PopularCarHire />
        <TrendingActivity />
        <FeaturedRentals />
        <RecommendedHotels />
        <PopularTours />

        <LocalInfo />
      </div>
    </div>
  );
};

export default DestinationsPage;
