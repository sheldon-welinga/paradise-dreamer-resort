import React from "react";
import { ImageWrapper } from "./Styled";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PopularDestinations = () => {
  return (
    <div className="popular-destinations">
      <h2 className="title">Popular Destinations</h2>
      <p className="sub-title">Our clients popular destinations</p>
      <div className="main-wrapper">
        <OwlCarousel items="3" autoplay={true} dots loop nav>
          <div className="item">
            <ImageWrapper img="/images/adventure-1.jpg" />
            <p className="location">Nairobi, Kenya</p>
          </div>
          <div className="item">
            <ImageWrapper img="/images/adventure-2.jpg" />
            <p className="location">Naivasha, Kenya</p>
          </div>
          <div className="item">
            <ImageWrapper img="/images/adventure-3.jpg" />
            <p className="location">Nakuru, Kenya</p>
          </div>
          <div className="item">
            <ImageWrapper img="/images/adventure-4.jpg" />
            <p className="location">Maasai Mara, Kenya</p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default PopularDestinations;
