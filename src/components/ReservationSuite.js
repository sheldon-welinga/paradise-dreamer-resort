import React from "react";

const ReservationSuite = (props) => {
  const { image, title, description, size, views } = props.room;

  //   let splittedView =
  console.log(views.length);

  return (
    <div className="reservation-suite">
      <div className="image">
        <img src={image} alt={title} className="img-responsive" />
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
            from <span>Kshs. 25,000</span>
          </p>
          <p>average per night</p>
        </div>
        <button type="button" className="btn btn-primary">
          Select Room
        </button>
      </div>
    </div>
  );
};

export default ReservationSuite;
