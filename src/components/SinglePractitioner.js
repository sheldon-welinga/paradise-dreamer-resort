import React from "react";
import { Link } from "react-router-dom";

const SinglePractitioner = (props) => {
  const {
    image,
    alternative,
    title,
    position,
    description,
  } = props.practitioner;

  const linkTitle = title.toLowerCase().split(" ").join("+");
  //   console.log(props.practitioner);
  return (
    <div className="single-practitioner">
      <div className="image">
        <img src={image} alt={alternative} className="img-responsive" />
      </div>
      <div className="content">
        <h2>{title}</h2>
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
