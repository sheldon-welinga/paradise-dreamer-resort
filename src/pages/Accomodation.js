import React, { useEffect, useState } from "react";
import { StyledHero } from "../components/Styled";
import Suite from "../components/Suite";

const Accomodation = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();

        setRooms(data.accomodation);
      } catch (err) {
        console.log(err);
      }
    };

    getRoomDetails();
  }, []);

  return (
    <>
      <StyledHero className="accomodation-header">
        <div className="overlay">
          <h4>Accomodation</h4>
        </div>
      </StyledHero>
      <div className="page-height accomodation">
        <div className="accomodation-suite-lists">
          <div className="suite">
            <p>Residential suits</p>
          </div>
          <div className="suite">
            <p>Club Floor</p>
            <p>Guest Rooms</p>
          </div>
          <div className="suite">
            <p>Large Suites</p>
            <p>Accessible Rooms</p>
          </div>
          <div className="suite">
            <p>Small Suites</p>
          </div>
        </div>
        <div className="accomodation-content">
          <p>
            All rooms have been outfitted with individual state-of-the-art air
            purification systems that sanitize the airspace every 30 minutes, as
            well as HEPA filter devices.
          </p>
        </div>
        <div className="accomodation-suites">
          {rooms.map((room) => (
            <Suite key={room.id} room={room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Accomodation;
