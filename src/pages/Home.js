import React from "react";

import Gallery from "../components/Gallery";
import HomeSlider from "../components/HomeSlider";
import ResortSection from "../components/ResortSection";
import WelcomeHome from "../components/WelcomeHome";

const Home = () => {
  return (
    <div className="page-height home">
      <HomeSlider />
      <WelcomeHome />
      <ResortSection />
      <div className="gallery-section">
        <h2 className="title">Gallery</h2>
        <Gallery featuredClass="featured" />
      </div>
    </div>
  );
};

export default Home;
