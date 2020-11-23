import React from "react";
import { withRouter } from "react-router-dom";
import { IMG_URL } from "../configure";

const ReservationSuite = (props) => {
  const { image, title, description, size, views, price } = props.room;

  const handleClick = () => {
    localStorage.setItem("room", JSON.stringify(props.room));

    props.history.push("/choose-your-room");
  };

  return (
    <div className="reservation-suite">
      <div className="image">
        <img
          src={`${IMG_URL}${image}`}
          alt={title}
          className="img-responsive"
        />
      </div>
      <div className="info">
        <div className="info-title">
          <h2>{title}</h2>
        </div>
        <div className="info-body">
          <div>
            <h6>View</h6>
            <p>{views}</p>
          </div>
          <div>
            <h6>Room Size</h6>
            <p>{size}</p>
          </div>
          <div>
            <h6>Bed Options</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="info-price">
        <div className="price">
          <p>
            from <span>Kshs. {price}</span>
          </p>
          <p>average per night</p>
        </div>
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Select Room
        </button>
      </div>
    </div>
  );
};

export default withRouter(ReservationSuite);
