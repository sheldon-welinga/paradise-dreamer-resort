import React, { Component } from "react";
import Calendar from "../Calendar";
import Loading from "../components/Loading";
import ReservationSteps from "../components/ReservationSteps";
import ReservationSuite from "../components/ReservationSuite";
import { counterCheckerForClasses } from "../functions/checkerFucntions";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedDate: "",
      checkIn: false,
      checkInDate: "",
      checkOut: false,
      checkOutDate: "",
      maxCapacity: 0,
      promoCode: "",
      adults: [],
      adult: "1 Adult",
      child: "0 Child",
      children: [],
      reservationRooms: [],
    };
  }

  //fetch data from database/api endpoint
  fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return data.accomodation;
    } catch (err) {
      console.log(err.message);
    }
  };

  //handle input data change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //handle Checkout calendar
  onChangeCheckOutDate = (newDate) => {
    this.setState({
      checkOutDate: newDate,
      checkOut: false,
    });
  };

  //handle checkin calendar
  onChangeCheckInDate = (newDate) => {
    this.setState({
      checkInDate: newDate,
      checkIn: false,
    });
  };

  //handle checkin input focus
  handleCheckInFocus = () => {
    this.setState({
      checkIn: true,
      checkOut: false,
    });
  };

  //handle checkout input focus
  handleCheckOutFocus = () => {
    this.setState({
      checkOut: true,
      checkIn: false,
    });
  };

  setOptionsValues = () => {
    this.fetchData().then((data) => {
      const maxAdults = Math.max(...data.map((item) => item.adults));
      const maxChildren = Math.max(...data.map((item) => item.children));

      let adults = [];
      let children = [];

      for (let i = 1; i <= maxAdults; i++) {
        let addedAdult = `${i} ${i <= 1 ? "Adult" : "Adults"}`;
        adults = [...adults, addedAdult];
      }

      for (let j = 0; j <= maxChildren; j++) {
        let addedChild = `${j} ${j <= 1 ? "Child" : "Children"}`;
        children = [...children, addedChild];
      }

      this.setState({
        adults,
        children,
        loading: false,
        reservationRooms: data.filter((item) => item.id === 1),
      });
    });
  };

  componentDidMount() {
    this.setOptionsValues();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formGroups = [...document.querySelectorAll(".form-group")];

    const { checkInDate, checkOutDate, adult, child, promoCode } = this.state;
    const splittedAdult = adult.split(" ")[0];
    const splittedChild = child.split(" ")[0];

    // counterCheckerForClasses(formGroups, )
    const counter = counterCheckerForClasses(
      formGroups,
      "invalid-error",
      "success",
      "promo-code",
      "none"
    );

    if (counter >= formGroups.length - 1) {
      this.fetchData().then((data) => {
        const filtered = data.filter(
          (item) =>
            item.children >= splittedChild && item.adults >= splittedAdult
        );

        this.setState({
          reservationRooms: filtered,
        });

        // console.log(filtered);
      });

      this.props.history.push(
        `/plan-your-stay?checkin=${checkInDate}&checkout=${checkOutDate}&room=1&adults=${splittedAdult}&children=${splittedChild}&promocode=${promoCode}`
      );
    }
  };

  render() {
    const {
      loading,
      checkInDate,
      checkOutDate,
      checkIn,
      checkOut,
      adult,
      adults,
      child,
      children,
      promoCode,
      reservationRooms,
    } = this.state;

    // console.log(reservationRooms);
    return (
      <div className="page-height reservation">
        <ReservationSteps steps={1} />
        <div className="reservation-search-rooms">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="checkIn"
                id="checkIn"
                readOnly
                value={checkInDate}
                placeholder="Check In"
                className="form-control"
                autoComplete="off"
                onChange={this.onChangeCheckInDate}
                onFocus={this.handleCheckInFocus}
              />
              {checkIn ? (
                <Calendar
                  selectedDate={checkInDate}
                  onChangeDate={this.onChangeCheckInDate}
                />
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="checkOut"
                id="checkOut"
                value={checkOutDate}
                placeholder="Check Out"
                className="form-control"
                autoComplete="off"
                readOnly
                onChange={this.onChangeCheckOutDate}
                onFocus={this.handleCheckOutFocus}
              />
              {checkOut ? (
                <Calendar
                  selectedDate={checkOutDate}
                  onChangeDate={this.onChangeCheckOutDate}
                />
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <select
                name="adult"
                id="adult"
                className="form-control"
                value={adult}
                onChange={this.handleChange}
              >
                {adults.length &&
                  adults.map((opt, index) => (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group">
              <select
                name="child"
                id="child"
                className="form-control"
                value={child}
                onChange={this.handleChange}
              >
                {children.length &&
                  children.map((opt, index) => (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group promo-code">
              <input
                type="text"
                name="promo-code"
                id="promoCode"
                value={promoCode}
                onChange={this.handleChange}
                autoComplete="off"
                placeholder="Promo Code"
                className="form-control"
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-primary">
                Find Rooms
              </button>
            </div>
          </form>
        </div>
        <div className="reservation-rooms">
          {/* <div className="suite">
            <div className="image">
              <img src={reservationRooms.image} alt={reservationRooms.title} className="img-responsive" />
            </div>
            <div className="info">
              <div className="info-title">
                <h2>{reservationRooms.title}</h2>
              </div>
              <p>{reservationRooms.description}</p>
              <p>{reservationRooms.size}</p>
              <p>{reservationRooms.occupancy}</p>
              <div className="btn-container">
                <Link to="/plan-your-stay" className="btn btn-primary">
                  Check rates
                </Link>
                <Link
                  to={`/accomodation/${type}/${slug}`}
                  className="btn btn-outline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div> */}
          {loading ? (
            <Loading />
          ) : (
            reservationRooms.length &&
            reservationRooms.map((room) => (
              <ReservationSuite key={room.id} room={room} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Reservation;
