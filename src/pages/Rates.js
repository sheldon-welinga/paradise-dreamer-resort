import React from "react";
import { StyledHero } from "../components/Styled";
import { RiBuilding4Line } from "react-icons/ri";

const Rates = () => {
  return (
    <div className="page-height rates">
      <StyledHero className="rates-header" image="/images/paradise-hotel.jpg">
        <div className="details">
          <h2>Paradise Dreamer</h2>
          <RiBuilding4Line />
          <p className="address">
            Northwest Point, Prince Sheldon Beach, 00000
          </p>
          <p>
            <i className="fa fa-phone"></i>+254 703 416 363
          </p>
          <p>
            <i className="fa fa-paper-plane-o"></i>info@paradisedreamer.com
          </p>
        </div>
      </StyledHero>
      <div className="rates-section-one">
        <div className="rates-capacity">
          <div className="checklist">
            <div className="top-checklist">
              <div className="guests">
                <span className="icon"></span>
                <span className="list">
                  <span>Guests</span>
                  <span>
                    <ul className="select">
                      <li>1</li>
                    </ul>
                  </span>
                </span>
              </div>
            </div>
            <div className="bottom-checklist">
              <div className="promo-codes">Promo Codes or Rates</div>
              <div className="promo-code-container">
                <div className="promo-code-input"></div>
                <div className="promo-code-cancel-apply">
                  <span>Cancel</span>
                  <span>Apply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rates-prices"></div>
      </div>
    </div>
  );
};

export default Rates;
