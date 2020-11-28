import React, { Component } from "react";
import { Link } from "react-router-dom";
import { counterCheckerForReservationConfirm as contactConfirm } from "../functions/checkerFucntions";
import { API_URL } from "../configure";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Select",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "Please select a reason",
      message: "",
      error: "",
      success: "",
    };
  }

  //handle input and select value changes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //handle form submission
  handleSubmit = async (e) => {
    e.preventDefault();

    const formGroups = [...document.querySelectorAll(".form-group")];

    const counter = contactConfirm(
      formGroups,
      "invalid-error",
      "success",
      "phone",
      "Select",
      "Please select a reason"
    );

    if (counter >= formGroups.length - 1) {
      try {
        const configOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };

        const response = await fetch(
          `${API_URL}/contact-requests/new`,
          configOptions
        );

        const responseMsg = await response.json();

        this.setState({
          success: responseMsg.message,
          error: responseMsg.error,
        });
      } catch (err) {
        this.setState({ error: err.message });
      }
    }
  };

  render() {
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      reason,
      message,
      error,
      success,
    } = this.state;

    return (
      <div className="page-height contact">
        <div className="contact-main">
          <div className="contact-heading">
            <p>Paradise Dreamer</p>
            <h2>Contact Us</h2>
          </div>
          <div className="contact-details">
            <div>
              <p>Address</p>
              <p>3900 Paradise Drive, Paradise, Kenya</p>
            </div>
            <div>
              <p>Reservations</p>
              <p className="phone">+254 (0) 703-416363</p>
            </div>
            <div>
              <p>Front Desk</p>
              <p className="phone">+254 (0) 703-416363</p>
            </div>
            <div>
              <p>Guest Fax</p>
              <p className="phone">+254 (0) 703-416363</p>
            </div>
          </div>
          <div className="contact-social-icons">
            <Link to="/contact-us">
              <span className="fa fa-twitter"></span>
            </Link>
            <Link to="/contact-us">
              <span className="fa fa-facebook"></span>
            </Link>
            <Link to="/contact-us">
              <span className="fa fa-google-plus"></span>
            </Link>
            <Link to="/contact-us">
              <span className="fa fa-instagram"></span>
            </Link>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="main-success">{success}</div>}
        <div className="contact-form">
          <form onSubmit={this.handleSubmit}>
            <div className="group-items">
              <div className="form-group select">
                <label htmlFor="title">TITLE*</label>
                <select
                  name="title"
                  id="title"
                  className="form-control"
                  value={title}
                  onChange={this.handleChange}
                >
                  <option value="Select">Select</option>
                  <option value="Mr">Mr.</option>
                  <option value="Mrs">Mrs.</option>
                  <option value="Ms">Ms.</option>
                  <option value="Miss">Miss.</option>
                  <option value="Dr">Dr.</option>
                  <option value="Prof">Prof.</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
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
                <label htmlFor="lastName">Last Name*</label>
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
            <div className="group-items">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group phone">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="group-items">
              <div className="form-group select">
                <label htmlFor="reason">REASON FOR CONTACT*</label>
                <select
                  name="reason"
                  id="reason"
                  className="form-control"
                  value={reason}
                  onChange={this.handleChange}
                >
                  <option value="Please select a reason">
                    Please select a reason
                  </option>
                  <option value="Make or change reservation">
                    Make or Change a Reservation
                  </option>
                  <option value="General question">General Question</option>
                  <option value="Technical support">Technical Support</option>
                  <option value="Arrange a delvery">Arrange a Delivery</option>
                  <option value="Lost items">Lost Items</option>
                  <option value="Medical alert">Medical Alert</option>
                  <option value="Comments and concerns">
                    Comments &amp; Concerns
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="group-items textarea-field">
              <div className="form-group field">
                <label htmlFor="message">HOW CAN WE HELP YOU?</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="form-control"
                  value={message}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
