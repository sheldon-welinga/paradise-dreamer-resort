import React from "react";

const FeaturedListing = ({ name, location }) => {
  return (
    <div className="featured-listing">
      <div className="listing-info">
        <p className="name">Star Hotel</p>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam
          eaque ipsum vero ullam repellendus fugiat molestiae error ad rerum
        </div>
        <p className="location">
          <span className="fa fa-map-marker"></span> Nairobi, Kenya
        </p>
        <button className="btn btn-default">Go to listing</button>
      </div>
    </div>
  );
};

export default FeaturedListing;
