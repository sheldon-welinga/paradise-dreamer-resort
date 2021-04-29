import React from "react";
import HomeSearch from "./HomeSearch";

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <div className="cover">
        <div>
          <h2>Connecting you to a hotel near you</h2>
          <h4>
            Experience Beautiful Heritage &amp; Honeymoon Experience on Earth
          </h4>
          <h5>The Touch of Paradise</h5>
          <HomeSearch />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
