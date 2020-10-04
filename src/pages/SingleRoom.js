import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledHero } from "../components/Styled";
import ErrorPage from "./ErrorPage";

const SingleRoom = (props) => {
  const [room, setRoom] = useState({});
  const roomSlug = props.match.params.slug;

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const singleRoom = data.accomodation.find(
          (room) => room.slug === roomSlug
        );

        setRoom(singleRoom);
      } catch (err) {
        console.log(err);
      }
    };

    getRoomDetails();
  }, [roomSlug]);

  if (!room) return <ErrorPage />;
  //   console.log(room);

  const {
    image,
    title,
    description,
    occupancy,
    size,
    bathroom,
    views,
    uniqueFeatures,
    content,
  } = room;

  return (
    <div className="page-height single-room">
      <div className="single-room-header">
        <h5>Accomodation</h5>
        <h3>{title}</h3>
      </div>
      <StyledHero image={image} />
      <div className="single-room-content">
        <p>{content}</p>
        <Link to="/" className="btn btn-default">
          Check Rates
        </Link>
      </div>
      <div className="single-room-gallery">
        <h3>Gallery</h3>
        <div>Slider of images...... To be updated</div>
      </div>
      <div className="single-room-details">
        <h4>Details</h4>
        <div className="details">
          <div>
            <h5>Beds</h5>
            <p>{description}</p>
          </div>
          <div>
            <h5>Occupancy</h5>
            <p>{occupancy}</p>
          </div>
          <div>
            <h5>Size</h5>
            <p>{size}</p>
          </div>
          <div>
            <h5>Bathroom</h5>
            <p>{bathroom}</p>
          </div>
          <div>
            <h5>Views</h5>
            <p>{views}</p>
          </div>
          <div>
            <h5>Unique Features</h5>
            <p>{uniqueFeatures}</p>
          </div>
        </div>
      </div>
      <div className="single-room-additional">
        <p>
          Additional charges apply for children aged 5 to 18 years in all Club
          Floor rooms and suites
        </p>
        <Link to="/" className="btn btn-primary">
          Amenities
        </Link>
      </div>
      <div className="single-room-contact">
        <p>We can help you with any questions or information</p>
        <Link to="/contact" className="btn btn-default">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SingleRoom;
