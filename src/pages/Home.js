import React from "react";
import HomeSlider from "../components/HomeSlider";
import ResortSection from "../components/ResortSection";
import WelcomeHome from "../components/WelcomeHome";

const Home = () => {
  return (
    <div className="page-height home">
      <HomeSlider />
      <WelcomeHome />
      <ResortSection />
      <div>
        Gallery with featured images..... To be added. Also add button with view
        more to show all gallery
      </div>
    </div>
  );
};

export default Home;
