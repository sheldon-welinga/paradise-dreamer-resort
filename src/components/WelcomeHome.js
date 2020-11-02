import React from "react";
import { Link } from "react-router-dom";

const WelcomeHome = () => {
  return (
    <div className="welcome-home">
      <div className="info">
        <h4>Welcome to our Hotel</h4>
        <h2>Paradise Dreamer Resort &amp; SPA</h2>
        <h5>An epitome of luxury to rejuvenate your senses</h5>
        <p>
          Experience the largest beachfront hotel and resorts. Find the luxury
          at our resort and SPA. Edging the coastal beach white sands and the
          clear-blue ocean in paradise, our resorts deliver authentic local and
          international experience. Since its opening in 1990, millions of
          visitors have been foreseen as well as movie stars, senior government
          officials both local and international royalty due to it's romantic
          world charm and loving hospitality. Ease of access to all the
          attraction places like the sandy beach and lit pathways at nights has
          made it the heart resort destination.
        </p>
        <p>
          The hotel is a full service,and self contained resort with upto 800
          rooms in five oceanic resorts with newly designed four star boutique
          which can accomodate upto 50 guest rooms situated to the East of the
          Crystalline Beach, along the Prince Sheldon the great beach path.
        </p>
        <Link to="/plan-your-stay" className="btn btn-primary">
          View our Rates
        </Link>
      </div>
      <div className="image">
        <div>
          <img src="/images/paradise-hotel.jpg" alt="Paradise hotel" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;
