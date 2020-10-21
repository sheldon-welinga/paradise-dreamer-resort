import React from "react";
import { Link } from "react-router-dom";

const SingleTreatment = ({ toggleClose, treatment }) => {
  const { title, amount, time, description, slug } = treatment;

  return (
    <div className="single-treatment">
      <div className="treatment-info">
        <div className="title" onClick={toggleClose}>
          <h2>{title}</h2>
          <h5>
            KES {amount}, {time}
          </h5>
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
      <div className="link">
        <Link
          to={`/spa/treatments/book-treatment/${slug}`}
          className="btn btn-primary"
        >
          Book Treatment
        </Link>
      </div>
    </div>
  );
};

export default SingleTreatment;
