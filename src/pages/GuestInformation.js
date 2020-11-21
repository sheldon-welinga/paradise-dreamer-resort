import React, { Component } from "react";
import Loading from "../components/Loading";
import { counterCheckerForClasses } from "../functions/checkerFucntions";
import { API_URL } from "../configure";

class GuestInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      amount: "",
      treatment: "",
      treatmentId: "",
      therapist: "",
      date: "",
      time: "",
      maxTimeCount: 0,
      firstName: "",
      lastName: "",
      email: "",
      gender: "Select gender",
      phone: "",
      specialCode: "",
      check: false,
      success: "",
      error: "",
    };
  }

  //handle input data in form change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleCheck = () => {
    this.setState({
      check: !this.state.check,
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

  //Handle form submission
  handleSubmit = async (e) => {
    e.preventDefault();

    const formGroups = [...document.querySelectorAll(".form-group")];

    let counter = counterCheckerForClasses(
      formGroups,
      "invalid-error",
      "success",
      "specialCode",
      "Select gender"
    );

    if (!this.state.check) {
      document.querySelector(".policy").classList.add("invalid-error");
    } else {
      document.querySelector(".policy").classList.remove("invalid-error");
    }

    if (counter >= formGroups.length - 1 && this.state.check) {
      //  Link to backend API for processing Treatment Booking
      try {
        // console.log(this.state);

        const configureOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };

        const response = await fetch(
          `${API_URL}/book-treatment/new`,
          configureOptions
        );

        // if (!response.ok) throw Error(`Oops!! ${response.statusText}`);

        const responseMsg = await response.json();

        // console.log(responseMsg);
        this.setState({
          error: responseMsg.error,
          success: responseMsg.message,
        });

        if (this.state.success) {
          setTimeout(() => {
            //reset the localStorage
            localStorage.removeItem("bookTreatmentDetails");

            //redirect back to the treatments page
            this.props.history.push("/spa/treatments");
          }, 7000);
        }

        //reset the state to it's original format
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          gender: "Select gender",
          phone: "",
          specialCode: "",
          check: false,
        });
      } catch (err) {
        // console.log(err.message);
        this.setState({ error: err.message });
      }
    }
  };

  componentDidMount() {
    const bookingDetails = JSON.parse(
      localStorage.getItem("bookTreatmentDetails")
    );

    if (!bookingDetails) {
      this.props.history.push("/spa/treatments");
    } else {
      this.setState({
        date: bookingDetails.date,
        time: bookingDetails.time,
        treatment: bookingDetails.treatment,
        amount: bookingDetails.amount,
        therapist: bookingDetails.therapist,
        treatmentId: bookingDetails.treatmentId,
        maxTimeCount: bookingDetails.maxTimeCount,
        loading: false,
      });
    }

    // console.log(amount);
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const {
      loading,
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
      error,
      success,
    } = this.state;

    return (
      <div className="page-height guest-info">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="guest-information">
              <div className="guest-info-header">
                <h6>Paradise Dreamer Booking</h6>
                <h2>Guest Information</h2>
              </div>
              {error && <div className="error">{error}</div>}
              {success && <div className="main-success">{success}</div>}
              <div className="guest-info-form">
                <form onSubmit={this.handleSubmit}>
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
                  <div className="form-group select">
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
                  <div className="form-group specialCode">
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
                      checked={check}
                      onChange={this.handleCheck}
                    />
                    <p>
                      I have read and agree to the above Cancellation policy and
                      the data privacy
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
          </>
        )}
      </div>
    );
  }
}

export default GuestInformation;
