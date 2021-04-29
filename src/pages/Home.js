import React from "react";
import { Link } from "react-router-dom";

import Gallery from "../components/Gallery";
import HomeSlider from "../components/HomeSlider";
import ResortSection from "../components/ResortSection";
import WelcomeHome from "../components/WelcomeHome";
import FeaturedListings from "./FeaturedListings";

const Home = () => {
  return (
    <div className="page-height home">
      <HomeSlider />
      <WelcomeHome />
      <FeaturedListings />
      <ResortSection />
      <div className="gallery-section">
        <h2 className="title">Gallery</h2>
        <Gallery featuredClass="featured" />
        <div className="browse-gallery">
          <Link className="btn btn-primary" to="/our-gallery">
            Browse our gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
