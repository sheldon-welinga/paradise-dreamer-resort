import React from "react";
import { Link } from "react-router-dom";
import ExperiencesHeader from "./ExperiencesHeader";
import { StyledHero } from "./Styled";

const NatureAndDiscovery = () => {
  return (
    <div className="page-height experiences">
      <ExperiencesHeader />
      <StyledHero image="/images/nature-1.jpg" />
      <div className="nature">
        <div className="nature-section-one">
          <h2>Nature Discovery Centre</h2>
          <p>
            Discover the diverse ecosystems of the Prince Beach and the Indian
            Ocean from both above and below water at our on-site Nature
            Discovery Centre. Environmental programmes for all ages focus on the
            discovery and conservation of the surrounding indigenous wildlife.
          </p>
          <Link to="/plan-your-stay" className="btn btn-primary">
            Make a reservation
          </Link>
        </div>
        <div className="nature-section-two">
          <div className="image">
            <img
              src="/images/adventure-4.jpg"
              alt="turtle"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>Restoring the reef</h2>
            <p>
              Spend time with Paradise Dreamer's Marine Biologist for an insight
              into beauty and balance of the undersea ecosystem. Embark on an
              eye-opening adventure in the world below the waves and get a crash
              course in marine biology, learning how corals are the cornerstones
              of ocean life.
            </p>
          </div>
        </div>
        <div className="nature-section-three">
          <div className="content">
            <h2>
              Dive undersea with a naturalist to discover indigenous underwater
              flora and fauna
            </h2>
            <p>
              The Nature Discovery Centre team can tailor activities to all ages
              and interests, both above and below the water.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/nature-2.jpg"
              alt="turtle"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="nature-section-two">
          <div className="image">
            <img
              src="/images/nature-4.jpeg"
              alt="turtle"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>
              Fun, youth- oriented nature and science programmes engage and
              educate
            </h2>
            <p>
              Specialist guide lead expeditions along the rocky shore as well as
              critter safaris, scavanger hunts and bird watching walks.
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

export default NatureAndDiscovery;
