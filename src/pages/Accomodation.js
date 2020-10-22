import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { StyledHero } from "../components/Styled";
import Suite from "../components/Suite";

const Accomodation = (props) => {
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

  const checkRoom = async () => {
    const data = await getData();
    const roomType = props.match.params;

    const foundType = data.find((room) => room.type === roomType);

    if (!foundType) {
      props.history.push("/accomodation");
    }
  };

  useEffect(() => {
    const getRoomDetails = async () => {
      const data = await getData();
      setRooms(data.filter((room) => room.featured));
    };
    getRoomDetails();

    checkRoom();

    // console.log(props.match.params);
  }, []);

  const handleResidentialSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "residential-suites"));
    props.history.push("/accomodation/residential-suites");
  };

  const handleClubFloor = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "club-floor"));
    props.history.push("/accomodation/club-floor");
  };

  const handleGuestRooms = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "guest-rooms"));
    props.history.push("/accomodation/guest-rooms");
  };

  const handleLargeSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "large-suites"));
    props.history.push("/accomodation/large-suites");
  };

  const handleAccessibleRooms = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "accessible-rooms"));
    props.history.push("/accomodation/accessible-rooms");
  };

  const handleSmallSuites = async () => {
    const data = await getData();
    setRooms(data.filter((room) => room.type === "small-suites"));
    props.history.push("/accomodation/small-suites");
  };

  //Toggle accomodation nav open and close on media screen <=768px
  const toggleNavOpen = (e) => {
    if (e.target.parentElement.classList.contains("open")) {
      e.target.parentElement.classList.remove("open");
    } else {
      e.target.parentElement.classList.add("open");
    }
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
          <span className="suite-toggler" onClick={toggleNavOpen}></span>
        </div>
        <div className="accomodation-content">
          <p>
            All rooms have been outfitted with individual state-of-the-art air
            purification systems that sanitize the airspace every 30 minutes, as
            well as HEPA filter devices.
          </p>
        </div>
        <div className="accomodation-suites">
          {rooms.length ? (
            rooms.map((room) => <Suite key={room.id} room={room} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default Accomodation;
