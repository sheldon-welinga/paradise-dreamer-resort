import React from "react";
import HomeSearch from "../../components/HomeSearch";
import ListingsFilter from "./ListingsFilter";
import SingleListing from "./SingleListing";

const Listings = () => {
  return (
    <div className="listings-page">
      <div className="home-search-wrapper">
        <HomeSearch />
      </div>

      <div className="listings-page-wrapper">
        <ListingsFilter />
        <div className="featured-listings-wrapper page">
          <SingleListing>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              totam itaque non nostrum ducimus temporibus est asperiores illo
              autem optio!
            </p>
          </SingleListing>
          <SingleListing></SingleListing>
          <SingleListing></SingleListing>
          <SingleListing></SingleListing>
          <SingleListing></SingleListing>
          <SingleListing></SingleListing>
        </div>
      </div>
    </div>
  );
};

export default Listings;
