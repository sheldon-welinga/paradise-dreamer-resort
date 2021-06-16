import React from "react";
import { PropertyOtherImage, StyledHotelHero } from "../Styled";

const SingleListingProperty = () => {
  return (
    <div className="single-listing-property">
      <div className="top-section">
        <div className="listing-header">
          <StyledHotelHero>
            <div className="overlay">
              <div className="book-info">
                <div className="book-info-top">
                  <h2>Book Now</h2>
                  <div className="availability">
                    <button className="btn btn-default">
                      Check Availability <i className="fa fa-chevron-right"></i>
                    </button>
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
            asperiores quas aliquid qui! Accusantium, dolor quibusdam deleniti
            corrupti sapiente incidunt blanditiis sed veniam modi. Officiis
            repellat quo quis earum rem in dolorem ea deleniti sequi facilis
            doloribus cumque fugit adipisci nihil, aspernatur sint ipsam? Animi
            fugiat, nihil ullam quidem voluptatem enim natus ratione nemo fuga
            quas aperiam, ipsa minima? Inventore deleniti culpa esse sapiente
            ullam? Quisquam itaque et eveniet modi, quo perferendis autem fugit
            doloribus possimus. Voluptate illo ullam fuga tempore asperiores
            quidem quas, doloribus beatae fugit explicabo minus cum laboriosam
            nulla cumque debitis iste? Et sunt consectetur dignissimos magnam
            nostrum provident libero qui ex sapiente odit unde alias repellendus
            autem eligendi, dolor error atque! Sit, doloremque nam? Culpa
            dolorem pariatur sed dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleListingProperty;
