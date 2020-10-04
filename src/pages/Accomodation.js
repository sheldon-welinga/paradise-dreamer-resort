import React, { useEffect, useState } from "react";
import { StyledHero } from "../components/Styled";
import Suite from "../components/Suite";

const Accomodation = () => {
  const [rooms, setRooms] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return data.accomodation;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getRoomDetails = async () => {
      const data = await getData();
      setRooms(data.filter((room) => room.featured));
    };

    getRoomDetails();
  }, []);

  const handleResidentialSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "residential-suites"));
  };

  const handleClubFloor = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "club-floor"));
  };

  const handleGuestRooms = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "guest-rooms"));
  };

  const handleLargeSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "large-suites"));
  };

  const handleAccessibleRooms = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "accessible-rooms"));
  };

  const handleSmallSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "small-suites"));
  };

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
            <p onClick={handleResidentialSuites}>Residential suits</p>
          </div>
          <div className="suite">
            <p onClick={handleClubFloor}>Club Floor</p>
            <p onClick={handleGuestRooms}>Guest Rooms</p>
          </div>
          <div className="suite">
            <p onClick={handleLargeSuites}>Large Suites</p>
            <p onClick={handleAccessibleRooms}>Accessible Rooms</p>
          </div>
          <div className="suite">
            <p onClick={handleSmallSuites}>Small Suites</p>
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
