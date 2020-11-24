import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "../components/Loading";
import { API_URL } from "../configure";

const Amenities = (props) => {
  const [amenities, setAmenities] = useState({});
  const [room, setRoom] = useState({});
  const [error, setError] = useState("");
  const roomSlug = props.match.params.slug;

  useEffect(() => {
    const getAmenities = async () => {
      try {
        const response = await fetch(`${API_URL}/accomodation-rooms/get-rooms`);
        const data = await response.json();

        const foundRoom = data.find((room) => room.slug === roomSlug);

        if (!foundRoom) {
          throw Error("No such room was found");
        } else {
          setRoom(foundRoom);

          setAmenities(foundRoom.amenities);
        }
      } catch (err) {
        // console.log(err.message);
        setError(err.message);
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
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <>
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
                valuableServices.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
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
        </>
      )}
    </div>
  );
};

export default Amenities;
