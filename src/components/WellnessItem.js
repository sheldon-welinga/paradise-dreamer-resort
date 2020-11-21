import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../configure";

const WellnessItem = ({ data }) => {
  const { images, slug, title, content } = data;
  const image = images[0].image;
  const alternative = images[0].alternative;

  return (
    <div className="wellness-single-item">
      <div className="image">
        <img
          src={`${IMG_URL}${image}`}
          alt={alternative}
          className="img-responsive"
        />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
        <Link to={`/spa/personalized-wellness/${slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default WellnessItem;
