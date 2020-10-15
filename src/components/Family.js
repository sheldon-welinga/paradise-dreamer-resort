import React from "react";
import { Link } from "react-router-dom";
import ExperiencesHeader from "./ExperiencesHeader";
import { StyledHero } from "./Styled";

const Family = () => {
  return (
    <div className="page-height experiences">
      <ExperiencesHeader />
      <StyledHero image="/images/family-2.jpg" />
      <div className="family">
        <div className="family-section-one">
          <h2>Family</h2>
          <p>
            From nature walks to energetic beach sports, Paradise Dreamer's
            offerings extend to the whole family. Enjoy a host of activities
            together, or relax while your children participate in nature
            discovery, creative arts or sports programmes under the supervision
            of specially trained staff.
          </p>
        </div>
        <div className="family-section-two">
          <div className="image">
            <img
              src="/images/family-3.jpg"
              alt="wild animals outside hotel"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>Hands-on, fun and educational</h2>
            <p>
              Paradise Dreamer's Nature Discovery Center offers programmes for
              all ages from eco-hikes and guided snorkelling trips, to
              involvement in the Paradise Sea Turtle Initiative. Facilities also
              include a children's pool and a jungle.
            </p>
          </div>
        </div>
        <div className="family-section-three">
          <div className="content">
            <h2>Tailored activities for all ages</h2>
            <p>
              Specialists tech yoga, Pilates and beach fitness classes designed
              for children and youths. There is also a pampering junior spa
              menu, offering nail art and more.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/family-1.jpg"
              alt="family in the ocean"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="adventure-section-two">
          <div className="image">
            <img
              src="/images/family-4.jpg"
              alt="pool table"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>The clubhouse is the base for sports of all variaties</h2>
            <p>
              Reconnect as a family doing all things you did as a kid. The
              clubhouse offers indoor games room, an outdor soccer pitch, and
              beach volleyball, basketball tennis courts.
            </p>
          </div>
        </div>
        <div className="adventure-section-three">
          <div className="content">
            <h2>
              Three- to six- bedroom Paradise Villas for family gatherings
            </h2>
            <p>
              Offering large private swimming ools and the services of personal
              cooks and housekeepers, many villas claim ocean views and direct
              beach access
            </p>
          </div>
          <div className="image">
            <img
              src="/images/family-5.jpg"
              alt="hotel and pool"
              className="img-responsive"
            />
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

export default Family;
