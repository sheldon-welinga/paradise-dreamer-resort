import React from "react";
import { Link } from "react-router-dom";

const ResortSection = () => {
  return (
    <div className="resort-section">
      <div className="resort-post">
        <div className="resort-image">
          <img
            src="/images/resort-image.jpg"
            alt="resort"
            className="img-responsive"
          />
          <div className="resort-icons">
            <span>
              <i className="fa fa-cutlery"></i>Juarex Resort
            </span>
            <span>
              <i className="fa fa-coffee"></i>Free Tea and Coffee
            </span>
          </div>
        </div>
        <div className="resort-info">
          <Link to="/">
            <h1>Everyones Dining Mood</h1>
          </Link>
          <h2>Introducing Cultures Through Locally-Sourced Cuisine</h2>
          <p>
            Our Beautiful resorts offers delicious meal in the old and modern
            world settings. The Paradise Dreamer Invites you to sample different
            flavours of the crystalline as well as foods from around the globe.
            Share family-style Italian dishes, feast on modern French cookery,
            explore creative Asian work-cuisine, and enjoy bold Mexican
            gastronomy. Whether you're dining seaside or on the rooftop, sip and
            savor every bite as you enjoy the finest hotels food and drink
            experiences Paradise Dreamer suggests for you.
          </p>
          <Link to="/" className="btn btn-primary">
            Read More<i className="fa fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="resort-why">
        <h1>Why Paradise Dreamer</h1>
        <p>
          {/* One of the best beach resorts along the Kenyan coast, Paradise Dreamer
          Hotel &amp; Resorts is recognized for its gracious hospitality,
          thoughtful amenities and distinctive architecture. */}
          Paradise Dreamers Hotels, Resorts &amp; SPAs are recognized for their
          gracious hospitality, thoughtful amenities and distinctive
          architecture.
        </p>
        <p>
          {/* All rooms are spacious and luxuriously furnished and have a unique
          arrangements of furniture, furnishings and decor. Similarly, all the
          rooms are with balcony with a view of manicured gardens, swimming pool
          and an endless ocean sight which magnifies its beauty with every
          sunrise. */}
          All rooms at the different hotels are spacious and luxuriously
          furnished and have a unique arrangement of furniture’s, furnishings
          and décor. Similarly, all the rooms are with balcony and most offer a
          great view of manicured gardens, swimming pool and an endless sight
          views which magnifies its beauty with every sunrise.
        </p>
        <p>
          Our platform also saves you the stress by creating a channel of
          communication to verify any bookings, confirm listings, send
          inquiries, rate your experience e.t.c.
        </p>
        <img
          src="/images/resort-image-1.jpg"
          alt=""
          className="img-responsive"
        />
      </div>
    </div>
  );
};

export default ResortSection;
