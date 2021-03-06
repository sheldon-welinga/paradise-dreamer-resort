import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IMG_URL } from "../configure";

const Suite = (props) => {
  const { image, title, description, size, occupancy, type, slug } = props.room;

  return (
    <div className="suite">
      <div className="image">
        <img
          src={`${IMG_URL}${image}`}
          alt={title}
          className="img-responsive"
        />
      </div>
      <div className="info">
        <div className="info-title">
          <Link to={`/accomodation/${type}/${slug}`}>{title}</Link>
          <HiOutlineArrowRight className="arrow" />
        </div>
        <p>{description}</p>
        <p>{size}</p>
        <p>{occupancy}</p>
        <div className="btn-container">
          <Link to="/plan-your-stay" className="btn btn-primary">
            Check rates
          </Link>
          <Link
            to={`/accomodation/${type}/${slug}`}
            className="btn btn-outline"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Suite;
