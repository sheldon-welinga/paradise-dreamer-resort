import React from "react";

const FeaturedListing = ({ name, location }) => {
  return (
    <div className="featured-listing">
      <div className="listing-info">
        <p className="name">Star Hotel</p>
        <p className="location">Nairobi, Kenya</p>
        <button className="btn btn-default">Go to listing</button>
      </div>
    </div>
  );
};

export default FeaturedListing;
