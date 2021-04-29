import React from "react";
import HomeSearch from "../../components/HomeSearch";
import FeaturedListing from "./FeaturedListing";

const Listings = () => {
  return (
    <div className="listings-page">
      <div className="home-search-wrapper">
        <HomeSearch />
      </div>

      <div className="featured-listings-wrapper">
        <FeaturedListing />
        <FeaturedListing />
        <FeaturedListing />
        <FeaturedListing />
        <FeaturedListing />
        <FeaturedListing />
      </div>
    </div>
  );
};

export default Listings;
