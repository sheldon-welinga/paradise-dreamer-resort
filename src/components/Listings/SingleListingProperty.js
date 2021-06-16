import React from "react";
import { PropertyOtherImage, StyledHotelHero } from "../Styled";

const SingleListingProperty = () => {
  return (
    <div className="single-listing-property">
      <div className="top-section">
        <div className="listing-header">
          <StyledHotelHero>
            <div className="overlay">
              <div>
                <div className="listing-header-top">
                  <h2>Book Now</h2>
                  <p>Best Prices Online</p>
                </div>
                <div className="book-info">
                  <div className="book-info-top">
                    <p className="book-info-extra">
                      Promotion Code <span className="link">Apply Here</span>
                    </p>

                    <div className="availability">
                      <button className="btn btn-primary">
                        Check Availability
                        <i className="fa fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledHotelHero>
          <div className="other-images">
            <PropertyOtherImage />
            <PropertyOtherImage />
            <PropertyOtherImage />
          </div>
        </div>

        <div className="listing-other-info">
          <div className="map">Map Section</div>
          <div className="manager-section">Manager</div>
        </div>
      </div>
      <div className="content-section">
        <div className="about">
          <h2 className="title">
            About<p>&nbsp;The Hotel</p>
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            vero nisi labore error non quasi eveniet maxime inventore tempore
            amet velit pariatur, eligendi quam dignissimos impedit magnam.
            Laboriosam, at. Vitae necessitatibus neque voluptate soluta eos
            autem rerum eligendi quis! Consectetur dolorum eligendi officia
            suscipit, perferendis minus nihil, pariatur placeat aut ab porro!
            Ratione quaerat totam, perferendis iure earum tempore quae aut quos
            repellat in minima alias excepturi nulla, amet architecto mollitia
            voluptatum ut ipsa ex cumque? Eos doloribus obcaecati voluptas
            asperiores, unde laudantium reprehenderit. Recusandae dolore
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            vero nisi labore error non quasi eveniet maxime inventore tempore
            amet velit pariatur, eligendi quam dignissimos impedit magnam.
            Laboriosam, at. Vitae necessitatibus neque voluptate soluta eos
            autem rerum eligendi quis! Consectetur dolorum eligendi officia
            suscipit, perferendis minus nihil, pariatur placeat aut ab porro!
            Ratione quaerat totam, perferendis iure earum tempore quae aut quos
            repellat in minima alias excepturi nulla, amet architecto mollitia
            voluptatum ut ipsa ex cumque? Eos doloribus obcaecati voluptas
            asperiores, unde laudantium reprehenderit. Recusandae dolore
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleListingProperty;
