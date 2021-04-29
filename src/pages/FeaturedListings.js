import React from "react";
import FeaturedListing from "./FeaturedListing";

const FeaturedListings = () => {
  return (
    <div className="featured-listings">
      <h2 className="title">Featured</h2>
      <div className="featured-listings-wrapper">
        <FeaturedListing />
        <FeaturedListing />
        <FeaturedListing />
      </div>
    </div>
  );
};

export default FeaturedListings;
