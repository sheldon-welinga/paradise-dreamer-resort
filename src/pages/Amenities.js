import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "../components/Loading";

const Amenities = (props) => {
  const [amenities, setAmenities] = useState({});
  const [room, setRoom] = useState({});
  const roomSlug = props.match.params.slug;

  useEffect(() => {
    const getAmenities = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const foundRoom = data.accomodation.find(
          (room) => room.slug === roomSlug
        );

        setRoom(foundRoom);

        setAmenities(foundRoom.amenities);
      } catch (err) {
        console.log(err.message);
      }
    };

    getAmenities();
  }, [roomSlug]);

  if (!amenities) {
    return (
      <div className="page-height">
        <Loading />
      </div>
    );
  }

  const {
    bedAndBath,
    technology,
    valuableServices,
    resortFeatures,
    roomFeatures,
  } = amenities;

  return (
    <div className="page-height amenities">
      <div className="back-link">
        <Link to={`/accomodation/${room.type}/${room.slug}`}>
          <IoIosArrowBack className="icon" /> {room.title}
        </Link>
      </div>
      <div className="title">
        <p>{room.title}</p>
        <h4>
          <span>{room.title}</span>
          <span>Amenities</span>
        </h4>
      </div>
      <div className="single-amenity">
        <h4>Bed &amp; Bath</h4>
        <ul>
          {bedAndBath ? (
            bedAndBath.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <div className="single-amenity">
        <h4>Techology</h4>
        <ul>
          {technology ? (
            technology.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <div className="single-amenity">
        <h4>valuable services with additional charges</h4>
        <ul>
          {valuableServices ? (
            valuableServices.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <div className="single-amenity">
        <h4>Resort Features &amp; Amenities</h4>
        <ul>
          {resortFeatures ? (
            resortFeatures.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <div className="single-amenity">
        <h4>Room Features</h4>
        <ul>
          {roomFeatures ? (
            roomFeatures.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <Loading />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Amenities;
