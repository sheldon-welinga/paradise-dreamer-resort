import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReservationSteps from "../components/ReservationSteps";

class ReservationRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: "",
      checkOut: "",
      adults: "",
      children: "",
      roomName: "",
      images: [],
      kingbed: "",
      queenbed: "",
      price: "",
      breakfast: "",
    };
  }

  componentDidMount() {
    const room = JSON.parse(localStorage.getItem("room"));

    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    if (!(room && bookingInfo)) {
      this.props.history.push("/plan-your-stay");
    } else {
      let desc = room.description.toLowerCase();

      if (desc.includes("one king bed")) {
        this.setState({ kingbed: "One King Bed" });
      } else if (desc.includes("two king bed")) {
        this.setState({ kingbed: "Two King Beds" });
      } else {
        this.setState({ kingbed: "King Bed" });
      }

      if (desc.includes("one queen bed")) {
        this.setState({ queenbed: "One Queen Bed" });
      } else if (desc.includes("two queen bed")) {
        this.setState({ queenbed: "Two Queen Beds" });
      } else {
        this.setState({ queenbed: "Queen Bed" });
      }

      this.setState({
        roomName: room.title,
        images: room.gallery,
        price: room.price,
        checkIn: new Date(bookingInfo.checkIn).toDateString(),
        checkOut: new Date(bookingInfo.checkOut).toDateString(),
        adults: bookingInfo.adults,
        children: bookingInfo.children,
        breakfast: room.breakFastPrice,
      });

      //   console.log(room);
    }
  }

  handleClick = (e) => {
    const priceElem =
      e.target.parentElement.firstElementChild.firstElementChild
        .firstElementChild;
    const chosenPrice = priceElem.innerHTML.split(" ")[1];

    const storageItems = JSON.parse(localStorage.getItem("bookingInfo"));

    storageItems.packagePrice = chosenPrice;

    localStorage.setItem("bookingInfo", JSON.stringify(storageItems));

    //link to the last page for confirming your stay
  };

  render() {
    const {
      images,
      checkIn,
      checkOut,
      adults,
      children,
      roomName,
      kingbed,
      queenbed,
      price,
      breakfast,
    } = this.state;

    return (
      <div className="page-height reservation-room">
        <ReservationSteps steps={2} />
        <div className="header-top">
          <div>
            <p>
              {checkIn} - {checkOut}
            </p>
            <p>1 Room</p>
            <p>{adults}</p>
            {children.split(" ")[0] > 0 && <p>{children}</p>}
          </div>
          <Link to="/plan-your-stay" className="btn btn-outline">
            Change Search
          </Link>
        </div>
        <div className="header-bottom">
          <p>{roomName}</p>
          <p>
            {kingbed} and {queenbed}
          </p>
        </div>
        <h2>Choose a package</h2>
        <div className="package-room">
          {/* ---------Package one--------- */}
          <div className="package">
            <div className="image">
              <img
                src={images[0]}
                alt="nightly resort credit"
                className="img-responsive"
              />
            </div>
            <div className="content">
              <h2>Experience More - nightly resort credit</h2>
              <p>
                Apply your valuable daily credit towards any incidental charge.
              </p>
            </div>
            <div className="info-price">
              <div className="price">
                <p>
                  <span id="price">Kshs. {price}</span>
                </p>
                <p>average per night</p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                Select package
              </button>
            </div>
          </div>
          {/* -----------End of package one-------- */}
          {/* ---------Package two--------- */}
          <div className="package">
            <div className="image">
              <img src={images[1]} alt="room rate" className="img-responsive" />
            </div>
            <div className="content">
              <h2>Room rate</h2>
              <p>
                The best available Room Rate, guaranteed. Book our most flexible
                option.
              </p>
            </div>
            <div className="info-price">
              <div className="price">
                <p>
                  <span id="price">Kshs. {price}</span>
                </p>
                <p>average per night</p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                Select package
              </button>
            </div>
          </div>
          {/* -----------End of package two-------- */}
          {/* ---------Package three--------- */}
          <div className="package">
            <div className="image">
              <img
                src={images[2]}
                alt="bed and breakfast"
                className="img-responsive"
              />
            </div>
            <div className="content">
              <h2>Bed and breakfast</h2>
              <p>Start each day with a signature Four Seasons breakfast.</p>
            </div>
            <div className="info-price">
              <div className="price">
                <p>
                  <span>Kshs. {breakfast}</span>
                </p>
                <p>average per night</p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleClick}
              >
                Select package
              </button>
            </div>
          </div>
          {/* -----------End of package three-------- */}
        </div>
        <div className="extras">
          <p>
            All offers are subject to availability at the time of reservation.
            Offers are not valid in conjuction with any other or contract and do
            not apply to groups.{" "}
            <span>
              Rates are per room, per night, vary by arrival date and/or length
              of stay, and do not include applicable taxes, service charges,
              levies, resort fees, gratuities or surcharges, unless otherwise
              noted.
            </span>{" "}
            Early departure fees may apply. Rates are subject to change.
          </p>
        </div>
      </div>
    );
  }
}

export default ReservationRoom;
