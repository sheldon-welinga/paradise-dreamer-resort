import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import SingleListingProperty from "../../components/Listings/SingleListingProperty";
import SingleListingRatingAndRemarks from "../../components/Listings/SingleListingRatingAndRemarks";
import SingleListingRoom from "../../components/Listings/SingleListingRooms";

const SingleListingPage = (props) => {
  const url = props.location.pathname.split("/")[3];
  const mainUrl = props.location.pathname.split("/")[1];

  return (
    <div className="single-listings-page">
      <div className="top-wrapper">
        <div className="property-listing-title">
          <h2 className="title">Star Hotel</h2>
        </div>
        <div className="single-listings-page-tab">
          <p
            className={`listing-tab ${
              mainUrl === "listing" && url === undefined ? "active" : ""
            }`}
          >
            <Link to="/listing/:slug" className="tab">
              Property
            </Link>
          </p>
          <p
            className={`listing-tab ${
              mainUrl === "listing" && url === "rooms" ? "active" : ""
            }`}
          >
            <Link to="/listing/:slug/rooms" className="tab">
              Rooms
            </Link>
          </p>
          <p
            className={`listing-tab ${
              mainUrl === "listing" && url === "ratings-and-remarks"
                ? "active"
                : ""
            }`}
          >
            <Link to="/listing/:slug/ratings-and-remarks" className="tab">
              Ratings &amp; Remarks
            </Link>
          </p>
          {/* <p className="listing-tab">
          <Link to="/listing/:listingId/property">Property</Link>
        </p> */}
        </div>
      </div>
      <div className="single-listing-wrapper">
        <Route exact path="/listing/:slug" component={SingleListingProperty} />
        <Route
          exact
          path="/listing/:slug/rooms"
          component={SingleListingRoom}
        />
        <Route
          exact
          path="/listing/:slug/ratings-and-remarks"
          component={SingleListingRatingAndRemarks}
        />
      </div>
    </div>
  );
};

export default withRouter(SingleListingPage);
