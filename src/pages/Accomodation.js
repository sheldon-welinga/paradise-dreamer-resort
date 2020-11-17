import React, { Component } from "react";

import Loading from "../components/Loading";
import { StyledHero } from "../components/Styled";
import Suite from "../components/Suite";
import { API_URL } from "../configure";

class Accomodation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      rooms: [],
    };
  }

  //fetch data from the database/API
  getData = async () => {
    try {
      const response = await fetch(`${API_URL}/accomodation-rooms/get-rooms`);

      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  //check if the room type exists
  checkRoom = async () => {
    const data = await this.getData();
    const roomType = this.props.match.params;

    const foundType = data.find((room) => room.type === roomType);

    if (!foundType) {
      this.props.history.push("/accomodation");
    }
  };

  getRoomDetails = async () => {
    const data = await this.getData();
    // console.log(DATA)

    this.setState({
      rooms: data.filter((room) => room.featured),
      loading: false,
    });
  };

  //Toggle accomodation nav open and close on media screen <=768px
  toggleNavOpen = (e) => {
    if (e.target.parentElement.classList.contains("open")) {
      e.target.parentElement.classList.remove("open");
    } else {
      e.target.parentElement.classList.add("open");
    }
  };

  //Handle button click for the links of accomodation
  handleClick = async (e) => {
    const data = await this.getData();

    this.setState({
      rooms: data.filter((room) => room.type === e.target.id),
      loading: false,
    });

    this.props.history.push(`/accomodation/${e.target.id}`);
  };

  componentDidMount() {
    const allBtns = [...document.querySelectorAll(".suite p")];

    this.getRoomDetails();

    this.checkRoom();

    allBtns.forEach((btn) => btn.addEventListener("click", this.handleClick));
  }

  render() {
    const { rooms, loading } = this.state;

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
              <p id="residential-suites">Residential suits</p>
            </div>
            <div className="suite">
              <p id="club-floor">Club Floor</p>
              <p id="guest-rooms">Guest Rooms</p>
            </div>
            <div className="suite">
              <p id="large-suites">Large Suites</p>
              <p id="accessible-rooms">Accessible Rooms</p>
            </div>
            <div className="suite">
              <p id="small-suites">Small Suites</p>
            </div>
            <span className="suite-toggler" onClick={this.toggleNavOpen}></span>
          </div>
          <div className="accomodation-content">
            <p>
              All rooms have been outfitted with individual state-of-the-art air
              purification systems that sanitize the airspace every 30 minutes,
              as well as HEPA filter devices.
            </p>
          </div>
          <div className="accomodation-suites">
            {loading ? (
              <Loading />
            ) : rooms.length ? (
              rooms.map((room) => <Suite key={room._id} room={room} />)
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Accomodation;
