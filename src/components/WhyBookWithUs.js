import React from "react";
import { GiWallet } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

const WhyBookWithUs = () => {
  return (
    <div className="why-book-with-us">
      <div className="top-section">
        <h2 className="title">Why Book With Us</h2>
        <p className="line">
          <span></span>
          <span></span>
        </p>
        <p className="content">
          We do not charge any booking fee and all your bookings are made at an
          expert level where you can make a live reservation at any hotel or
          destination near you with alot of confidence. We also guarantee free
          cancellation of trip or reservation and 100% money refund 5 days prior
          to your visit.
        </p>
      </div>
      <div className="bottom-section">
        <div className="section-wrapper">
          <div className="bottom-section-item">
            <p className="wrapper">
              <GiWallet className="icon" />
            </p>
            <p className="content">No Booking Fees</p>
          </div>
          <div className="bottom-section-item">
            <p className="wrapper">
              <GrNotes className="icon" />
            </p>
            <p className="content">Live Reservations</p>
          </div>
          <div className="bottom-section-item">
            <p className="wrapper">
              <FaCalendarCheck className="icon" />
            </p>
            <p className="content">Instant Confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBookWithUs;
