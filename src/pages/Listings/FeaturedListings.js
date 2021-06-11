import React from "react";
import { withRouter } from "react-router";
import SingleListing from "./SingleListing";

const FeaturedListings = (props) => {
  return (
    <div className="featured-listings">
      <h2 className="title">Featured</h2>
      <div className="featured-listings-wrapper">
        <SingleListing />
        <SingleListing />
        <SingleListing />
      </div>
      <div className="show-more">
        <button
          className="btn btn-outline"
          onClick={() => {
            props.history.push("/listings");
          }}
        >
          Discover more listings
        </button>
      </div>
    </div>
  );
};

export default withRouter(FeaturedListings);
