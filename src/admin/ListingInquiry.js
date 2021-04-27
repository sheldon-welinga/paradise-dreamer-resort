import React from "react";
import Listing from "./Listing";

const ListingInquiry = ({ title }) => {
  return (
    <div className="listings">
      <h3 className="title">{title}</h3>
      <p>
        Paradise Dreamers offers you the best way to start a short break holiday
      </p>
      <Listing />
    </div>
  );
};

export default ListingInquiry;
