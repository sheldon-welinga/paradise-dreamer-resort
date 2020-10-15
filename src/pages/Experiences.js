import React from "react";
import { Link } from "react-router-dom";

import ExperiencesHeader from "../components/ExperiencesHeader";
import { StyledHero } from "../components/Styled";

const Experiences = () => {
  return (
    <div className="page-height experiences">
      <ExperiencesHeader />
      <StyledHero image="/images/adventure.jpg" />
      <div className="adventure">
        <div className="adventure-section-one">
          <h2>Adventure Experiences</h2>
          <p>
            The pristine reefs of North West Point Marine National Park are some
            of the region's most diverse - a vibrant underwater wonderland
            running parallel to Paradise Dreamer secluded 800-meter beach.
            Hawksbill turtles, humpback whales, bonefish and hundreds of
            migratory bird species are frequent visitors. On land, the dry
            tropical forest protects a rich coastal ecosystem.
          </p>
          <Link to="/experiences" className="btn btn-primary">
            Make a reservation
          </Link>
        </div>
        <div className="adventure-section-two">
          <div className="image">
            <img
              src="/images/adventure-3.jpg"
              alt="coastline"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>Explore the coastline</h2>
            <p>
              Paradise, stand-up paddleboards and Hobie Cats are always
              available, and waterskiing can be enjoyed when waves permits. The
              breeze at Prince Bay Beach is ideal for kiteboarding from May
              through September.
            </p>
          </div>
        </div>
        <div className="adventure-section-three">
          <div className="content">
            <h2>Restoring the reef</h2>
            <p>
              Spend time with Paradise Dreamer's Marine Biologist for an insight
              into beauty and balance of the undersea ecosystem. Embark on an
              eye-opening adventure in the world below the waves and get a crash
              course in marine biology, learning how corals are the cornerstones
              of ocean life. In partnership with Sustainable Oceans
              International, Paradise Dreamer's Adopt-a-Coral project invites
              guests to help preserve an rejuvenate the coastal's reef by
              sponsoring a piece in the resort's coral nursery.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/adventure-4.jpg"
              alt="turtle"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="adventure-section-two">
          <div className="image">
            <img
              src="/images/adventure-5.jpg"
              alt="coastline"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>Scuba dive and snorkel extraordinary reefs</h2>
            <p>
              Magnificent coral and wall formations offer diving for all levels,
              and snorkelling can be enjoyed directly from Paradise Beach.
            </p>
          </div>
        </div>
        <div className="special-request">
          <h3>Special Requests</h3>
          <p>
            No request is too great and no detail too small. We are alo here to
            assist you before your trip begins.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
