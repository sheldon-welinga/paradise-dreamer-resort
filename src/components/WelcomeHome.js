import React from "react";
import { Link } from "react-router-dom";

const WelcomeHome = () => {
  return (
    <div className="welcome-home">
      <div className="info">
        <h4>Welcome to Paradise Dreamer</h4>
        <h2>Paradise Dreamer Resorts &amp; SPAs</h2>
        <h5>An epitome of luxury to rejuvenate your senses</h5>
        <p>
          {/* Experience the largest beachfront hotel and resorts. Find the luxury
          at our resort and SPA. Edging the coastal beach white sands and the
          clear-blue ocean in paradise, our resorts deliver authentic local and
          international experience. Since its opening in 1990, millions of
          visitors have been foreseen as well as movie stars, senior government
          officials both local and international royalty due to it's romantic
          world charm and loving hospitality. Ease of access to all the
          attraction places like the sandy beach and lit pathways at nights has
          made it the heart resort destination. */}
          At Paradise Dreamer, we connect you to one of the best Kenyan hotels,
          resorts and SPAs covering from different coastal beachfront hotels,
          first star hotels, park hotels, to many other great hotels all over.
          We also give you an insight of what you will expect before you make
          your bookings or travel arrangements. Do you feel you need
          accommodation or great travel experience? Well, let us take care of
          that for you. Find luxury at any hotel, resort or SPA all under one
          roof just by the click of a button and get best results according to
          your nearest location.
        </p>
        <p>
          {/* The hotel is a full service,and self contained resort with upto 800
          rooms in five oceanic resorts with newly designed four star boutique
          which can accomodate upto 50 guest rooms situated to the East of the
          Crystalline Beach, along the Prince Sheldon the great beach path. */}
          We offer a great platform to make your early reservation arrangements
          at any resort of your choice near you. Book early and save yourself
          the struggle, check our rates for different hotels here.
        </p>
        <Link to="/plan-your-stay" className="btn btn-primary">
          View Rates
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
