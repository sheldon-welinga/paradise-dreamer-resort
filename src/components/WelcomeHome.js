import React from "react";
import { Link } from "react-router-dom";

const WelcomeHome = () => {
  return (
    <div className="welcome-home">
      <div className="info">
        <h4>Welcome to Paradise Dreamer</h4>
        <h2>Paradise Dreamer Resorts &amp; SPAs</h2>
        {/* <h5>An epitome of luxury to rejuvenate your senses</h5> */}
        <h5>Connecting you to your nearest luxury place</h5>
        <p>
          At Paradise Dreamer, we connect you to one of the best Kenyan hotels,
          resorts and SPAs covering from different luxurious coastal beachfront
          hotels, first star hotels, park hotels, to many other great hotels all
          over. We also give you an insight of what you will expect before you
          make your bookings or travel arrangements. Do you feel you need
          accommodation or great travel experience? Well, let us take care of
          that by giving you luxury near you.
        </p>
        <p>
          We offer a great platform to make your early reservation arrangements
          at any resort of your choice near you. Book early and save yourself
          the struggle, check our rates for different hotels here.
        </p>
        <Link to="/plan-your-stay" className="btn btn-primary">
          View Rates
        </Link>
      </div>
    </div>
  );
};

export default WelcomeHome;
