import React, { Component } from "react";
import { counterCheckerForClasses } from "../functions/checkerFucntions";
import { API_URL } from "../configure";

class Inquiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      practitionerName: "",
      title: "Title",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      error: "",
      success: "",
    };
  }

  //handle input value change
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //toggle Open
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  //Handle form submission
  handleSubmit = async (e) => {
    e.preventDefault();

    const formGroups = [...document.querySelectorAll(".form-group")];

    const counter = counterCheckerForClasses(
      formGroups,
      "invalid-error",
      "success",
      "textarea",
      "Title"
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

        //send to backeend for processing and return the result i.e message or error
        const response = await fetch(`${API_URL}/inquiries/new`, configOptions);

        if (response.ok) {
          const responseMsg = await response.json();

          this.setState({ success: responseMsg.message });

          //To be added later to a notification div or a toastify
          console.log(responseMsg.message);
        } else {
          throw Error(`Oops!! ${response.statusText}`);
        }
      } catch (err) {
        this.setState({ error: err.message });
        // return err.message;
      }

      this.setState({
        title: "Title",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        this.setState({ success: "", error: "" });
      }, 7000);
    }
  };

  componentDidMount() {
    const search = this.props.location.search;

    if (search) {
      const splitted = search.split("=")[1].split("+").join(" ");
      this.setState({ practitionerName: splitted });
    }
  }

  render() {
    const {
      practitionerName,
      isOpen,
      title,
      firstName,
      lastName,
      email,
      message,
      error,
      success,
    } = this.state;

    return (
      <div className="page-height inquiry">
        <div className="main-inquiry">
          <div className="inquiry-header">
            <h6>Paradise Dreamer</h6>
            <h2>Wellness Reservation Inquiry</h2>
            <p>
              Are you interested in booking one of our spa treatments? Drop us
              your question in the box below and we'll get back to you as soon
              as we can.
            </p>
          </div>

          <div className="inquiry-form">
            {error && <div className="error">{error}</div>}
            {success && <div className="main-success">{success}</div>}
            {practitionerName && (
              <div className="form-header">
                <h5>Your Selection</h5>
                <p>{practitionerName}</p>
              </div>
            )}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group select">
                <select
                  name="title"
                  id="title"
                  className="form-control"
                  value={title}
                  onChange={this.handleChange}
                >
                  <option value="Title">Title</option>
                  <option value="Mr">Mr.</option>
                  <option value="Mrs">Mrs.</option>
                  <option value="Ms">Ms.</option>
                  <option value="Dr">Dr.</option>
                  <option value="Prof">Prof</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group textarea">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  className="form-control"
                  value={message}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className={isOpen ? "contact-inquiry open" : "contact-inquiry"}>
          <h5 onClick={this.toggleOpen}>Contact</h5>
          <div>
            <p>reservations-spa@paradisedreamers.com</p>
            <p>+254 703 416 363</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inquiry;
