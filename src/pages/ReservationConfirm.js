import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReservationSteps from "../components/ReservationSteps";
import { API_URL } from "../configure";
import { counterCheckerForReservationConfirm } from "../functions/checkerFucntions";
import {
  mastercardVerify,
  visaCardVerify,
} from "../functions/creditCardsVerification";

class ReservationConfirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: "",
      children: "",
      beds: "",
      checkIn: "",
      checkOut: "",
      roomName: "",
      roomId: "",
      packagePrice: "",
      roomTax: "",
      stateTax: "",
      roomTotal: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      confirmEmail: "",
      country: "",
      countries: [],
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      monthsArray: [],
      expiryYear: "",
      yearsArray: [],
      checkTerms: false,
      checkConsent: false,
      success: "",
      error: "",
    };
  }

  //fetch countries
  fetchCountries = async () => {
    try {
      const response = await fetch(`${API_URL}/countries/`);
      const data = await response.json();

      return data;
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  componentDidMount() {
    const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));

    if (!bookingInfo) {
      this.props.history.push("/plan-your-stay");
    } else {
      const price = Number(bookingInfo.packagePrice.split(",").join(""));
      const roomTax = ((10.25 / 100) * price).toLocaleString("en-Us", {
        maximumFractionDigits: 2,
      });

      const stateTax = ((4.17 / 100) * price).toLocaleString("en-Us", {
        maximumFractionDigits: 2,
      });

      const roomTotal = (
        price +
        Number(roomTax.split(",").join("")) +
        Number(stateTax.split(",").join(""))
      ).toLocaleString("en-US", { maximumFractionDigits: 2 });

      this.fetchCountries().then((data) => {
        this.setState({ countries: data });
      });

      const currentYear = new Date().getFullYear();
      let yearsArray = ["Year"];
      let monthsArray = ["Month"];

      for (let year = currentYear; year < currentYear + 20; year++) {
        yearsArray = [...yearsArray, year];
      }

      for (let i = 1; i <= 12; i++) {
        let month = `${i < 10 ? `0${i}` : i}`;
        monthsArray = [...monthsArray, month];
      }

      this.setState({
        adults: bookingInfo.adults,
        checkIn: new Date(bookingInfo.checkIn).toDateString(),
        checkOut: new Date(bookingInfo.checkOut).toDateString(),
        roomName: bookingInfo.roomName,
        roomId: bookingInfo.roomId,
        children: bookingInfo.children,
        beds: bookingInfo.beds,
        packagePrice: bookingInfo.packagePrice,
        roomTax,
        stateTax,
        roomTotal,
        monthsArray,
        yearsArray,
      });
    }
  }

  //handle input change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //handle terms checkbox change
  handleCheckTerms = () => {
    this.setState({
      checkTerms: !this.state.checkTerms,
    });
  };

  //handle terms checkbox change
  handleCheckConsent = () => {
    this.setState({
      checkConsent: !this.state.checkConsent,
    });
  };

  //handle form submission for confirming reservation booking
  handleSubmit = async (e) => {
    e.preventDefault();

    const inputFields = [...document.querySelectorAll(".inputs")];

    const counter = counterCheckerForReservationConfirm(
      inputFields,
      "invalid-error",
      "success",
      "promo-code",
      "Month",
      "Year"
    );

    const submissionDetails = {
      adults: this.state.adults,
      children: this.state.children,
      roomName: this.state.roomName,
      roomId: this.state.roomId,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      roomPrice: this.state.packagePrice,
      roomTax: this.state.roomTax,
      stateTax: this.state.stateTax,
      roomTotal: this.state.roomTotal,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      country: this.state.country,
      cardName: this.state.cardName,
      cardNumber: this.state.cardNumber,
      cardExpiryMonth: this.state.expiryMonth,
      cardExpiryYear: this.state.expiryYear,
    };

    if (!this.state.checkTerms) {
      document.querySelector(".terms").classList.add("invalid-error");
    } else {
      document.querySelector(".terms").classList.remove("invalid-error");
    }

    if (!this.state.checkConsent) {
      document.querySelector(".consent").classList.add("invalid-error");
    } else {
      document.querySelector(".consent").classList.remove("invalid-error");
    }

    if (this.state.email !== this.state.confirmEmail) {
      document.getElementById("confirm-email").classList.add("invalid-error");
    } else if (
      //validate the credit cards
      !(
        this.state.cardNumber.match(visaCardVerify) ||
        this.state.cardNumber.match(mastercardVerify)
      )
    ) {
      document.getElementById("confirm-card").classList.add("invalid-error");
    } else {
      if (
        counter >= inputFields.length &&
        this.state.checkTerms &&
        this.state.checkConsent
      ) {
        try {
          const configOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionDetails),
          };

          const response = await fetch(
            `${API_URL}/reservations/new`,
            configOptions
          );

          const responseMsg = await response.json();

          this.setState({
            success: responseMsg.message,
            error: responseMsg.error,
          });
        } catch (err) {
          this.setState({
            error: err.message,
          });
        }
      }
    }
  };

  render() {
    const {
      adults,
      checkIn,
      checkOut,
      roomName,
      children,
      beds,
      packagePrice,
      roomTax,
      stateTax,
      roomTotal,
      firstName,
      lastName,
      phoneNumber,
      email,
      confirmEmail,
      country,
      countries,
      cardName,
      cardNumber,
      expiryMonth,
      monthsArray,
      expiryYear,
      yearsArray,
      checkTerms,
      checkConsent,
      success,
      error,
    } = this.state;

    return (
      <div className="page-height reservation-confirm">
        <ReservationSteps steps={3} />
        <div className="main-reservation-section">
          <div className="reservation-summary">
            <h2 className="title">Your Reservation</h2>
            <div className="content">
              <p>Paradise Dreamer</p>
              <p>
                {checkIn.slice(4)} - {checkOut.slice(4)}
              </p>
              <p>
                1 Room - {adults}{" "}
                {children.split(" ")[0] > 0 && `& ${children}`}
              </p>
            </div>
            <div className="room-summary-details">
              <div className="top-details">
                <p className="room-name">{roomName}</p>
                <p>{beds}</p>
                <p>
                  Average Rate <span>Kshs. {packagePrice}</span>
                </p>
                <p className="partition">Daily Rates - (1 Night)</p>
                <p>
                  {checkIn} <span>Kshs. {packagePrice}</span>
                </p>
              </div>
              <div className="tax-details">
                <p>
                  Total Room Rates <span>Kshs. {packagePrice}</span>
                </p>
                <p>
                  Room Tax (10.25%) <span>Kshs. {roomTax}</span>
                </p>
                <p>
                  State Tax (4.17%) <span>Kshs. {stateTax}</span>
                </p>
              </div>
              <div className="room-total">
                <p>Estimated Total</p>
                <p>
                  Room Total <span>Kshs. {roomTotal}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="reservation-form">
            <h2 className="title">Confirm Your Stay</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="main-success">{success}</div>}
            <div className="asterisk">
              * asterisk indicates a required field
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-heading">Guest Details</div>
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="firstName">First Name*</label>
                </div>
                <div className="input-field inputs">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="lastName">Last Name*</label>
                </div>
                <div className="input-field inputs">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="phoneNumber">Phone Number*</label>
                </div>
                <div className="input-field inputs">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-control"
                    value={phoneNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="email">Email Address*</label>
                </div>
                <div className="input-field inputs">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="confirmEmail">Confirm Email Address*</label>
                </div>
                <div className="input-field inputs" id="confirm-email">
                  <input
                    type="text"
                    name="confirmEmail"
                    id="confirmEmail"
                    className="form-control"
                    value={confirmEmail}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="country">Country/Region*</label>
                </div>
                <div className="input-field select inputs">
                  <select
                    name="country"
                    id="country"
                    className="form-control"
                    value={country}
                    onChange={this.handleChange}
                  >
                    {countries &&
                      countries.map((country, index) => (
                        <option key={index}>{country.name}</option>
                      ))}
                  </select>
                </div>
              </div>
              {/* end form group */}
              <div className="form-heading">Credit Card Details</div>
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="cardName">Name on Card*</label>
                </div>
                <div className="input-field inputs">
                  <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    className="form-control"
                    value={cardName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label htmlFor="cardNumber">Credit Card Number*</label>
                </div>
                <div className="input-field inputs" id="confirm-card">
                  <input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    className="form-control"
                    value={cardNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* end form group */}
              {/* form group */}
              <div className="form-group">
                <div className="label">
                  <label>Credit Card Expiry Date*</label>
                </div>
                <div className="input-field credit-card">
                  <div className="inline-input-field select inputs">
                    <select
                      name="expiryMonth"
                      id="expiryMonth"
                      className="form-control"
                      value={expiryMonth}
                      onChange={this.handleChange}
                    >
                      {monthsArray &&
                        monthsArray.map((month, index) => (
                          <option key={index}>{month}</option>
                        ))}
                    </select>
                  </div>
                  <div className="inline-input-field select inputs">
                    <select
                      name="expiryYear"
                      id="expiryYear"
                      className="form-control"
                      value={expiryYear}
                      onChange={this.handleChange}
                    >
                      {yearsArray &&
                        yearsArray.map((year, index) => (
                          <option key={index}>{year}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* end form group */}
              <div className="accepted-cards">
                <span>Accepted Cards</span>
                <img
                  src="/images/visacard.jpg"
                  alt="visa card"
                  className="img-responsive card"
                />
                <img
                  src="/images/mastercard.png"
                  alt="master card"
                  className="img-responsive card"
                />
                <img
                  src="/images/paypalcard.png"
                  alt="paypal card"
                  className="img-responsive card"
                />
              </div>
              <div className="form-heading">Terms &amp; Conditions</div>
              <div className="terms">
                <input
                  type="checkbox"
                  name="checkTerms"
                  id="checkTerms"
                  className="form-control"
                  value={checkTerms}
                  onChange={this.handleCheckTerms}
                />
                <p>
                  I have read &amp; accepted the{" "}
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                </p>
              </div>
              <div className="consent">
                <input
                  type="checkbox"
                  name="checkConsent"
                  id="checkConsent"
                  className="form-control"
                  value={checkConsent}
                  onChange={this.handleCheckConsent}
                />
                <p>
                  I consent to Paradise Dreamer sending me electronic
                  communications so that Paradise Dreamer can keep me informed
                  of upcoming promotions and exclusive offers and to conduct
                  marketing research. You may withraw this consent at any time
                  by emailing privacy.officer@paradisedreamer.com.
                </p>
              </div>
              <div className="btn-container">
                <button type="submit" className="btn btn-primary">
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="cost-estimation">
          *Estimated total cost of room, taxes, service charges and applicable
          package inclusions. Estimated total cost does not include airport
          transfers or requested amenities. Actual taxes, service charges,
          leviews, resort fees and surcharges are calculated upon check-out and
          are subject to change without notice. Extra person/extra bed charges
          are additional to the rates displayed unless otherwise noted. Early
          departure fees may apply. Should you shorten your stay prior to
          arrival or during your stay, your room rate may change.
        </div>
      </div>
    );
  }
}

export default ReservationConfirm;
