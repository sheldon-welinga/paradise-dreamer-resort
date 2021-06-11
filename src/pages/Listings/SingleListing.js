import React from "react";
import { ImageWrapper } from "../../components/Styled";

const SingleListing = ({ name, location, children }) => {
  return (
    <ImageWrapper className="featured-listing" height="48vh">
      <div className="listing-info">
        <p className="name">Star Hotel</p>
        <div className="more-info">{children}</div>
        <div className="ratings">
          <p>
            Rating: <span className="count">8.5</span>
            <span className="rating-text">Excellent</span> .
          </p>
          <p className="reviews">86 Reviews</p>
        </div>
        <p className="available-rooms">
          Available Rooms: <span>10</span>
        </p>
        <p className="location">
          <span className="fa fa-map-marker"></span> Nairobi, Kenya
        </p>
        <button className="btn btn-default">Go to listing</button>
      </div>
    </ImageWrapper>
  );
};

export default SingleListing;
