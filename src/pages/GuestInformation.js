import React, { Component } from "react";

class GuestInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      amount: "",
      treatment: "",
      date: "",
      time: "",
      amount: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "Select gender",
      phone: "",
      specialCode: "",
      check: false,
    };
  }

  //handle input data in form change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //handle summary buttom click
  handleSummaryClick = (e) => {
    if (e.target.classList.contains("open")) {
      e.target.classList.remove("open");
    } else {
      e.target.classList.add("open");
    }
  };

  componentDidMount() {
    const bookingDetails = JSON.parse(
      localStorage.getItem("bookTreatmentDetails")
    );

    this.setState({
      date: bookingDetails.date,
      time: bookingDetails.time,
      treatment: bookingDetails.treatment,
      amount: bookingDetails.amount,
    });

    // console.log(amount);
  }

  render() {
    const {
      treatment,
      date,
      time,
      amount,
      firstName,
      lastName,
      email,
      gender,
      phone,
      specialCode,
      check,
    } = this.state;

    return (
      <div className="page-height guest-info">
        <div className="guest-information">
          <div className="guest-info-header">
            <h6>Paradise Dreamer Booking</h6>
            <h2>Guest Information</h2>
          </div>
          <div className="guest-info-form">
            <form>
              <div className="form-group">
                <p>First Name*</p>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Last Name*</p>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Email Address*</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Gender*</p>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={this.handleChange}
                >
                  <option value="Select gender">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <p>Phone Number*</p>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Special Code</p>
                <input
                  type="text"
                  name="specialCode"
                  id="specialCode"
                  className="form-control"
                  value={specialCode}
                  onChange={this.handleChange}
                />
              </div>
              <div className="policy">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  value={check}
                  onChange={this.handleChange}
                />
                <p>
                  I have read and agree to the above Cancellation policy and the
                  data privacy
                </p>
              </div>
              <button type="submit" className="btn btn-primary">
                Confirm Treatment
              </button>
            </form>
          </div>
        </div>
        <div className="guest-appointment">
          <h2>Your appointment</h2>
          <div className="summary" onClick={this.handleSummaryClick}>
            Summary
          </div>
          <div className="appointment-info">
            <div className="resort-address">
              <p>Paradise Dreamer</p>
              <p>P.O Box 5566</p>
              <p>Prince-Dibba PC 400</p>
              <p>+254 703 416 363</p>
            </div>
            <div className="booking-info">
              <p>
                Booked Date : <span>{date}</span>
              </p>
              <p>
                Booked Treatment : <span>{treatment}</span>
              </p>
              <p>
                Booked Time : <span>{time}</span>
              </p>
            </div>
            <div className="total-price">
              <p>Total price</p>
              <h6>KES {amount}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestInformation;
