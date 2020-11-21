import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../configure";

const SinglePractitioner = (props) => {
  const {
    image,
    alternative,
    name,
    position,
    description,
  } = props.practitioner;

  const linkTitle = name.toLowerCase().split(" ").join("+");
  //   console.log(props.practitioner);
  return (
    <div className="single-practitioner">
      <div className="image">
        <img
          src={`${IMG_URL}${image}`}
          alt={alternative}
          className="img-responsive"
        />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <h5>{position}</h5>
        <p>{description}</p>
        <Link
          className="btn btn-primary"
          to={`/spa/visiting-practitioners-calendar/inquiry?title=${linkTitle}`}
        >
          Make an Inquiry
        </Link>
      </div>
    </div>
  );
};

export default SinglePractitioner;
