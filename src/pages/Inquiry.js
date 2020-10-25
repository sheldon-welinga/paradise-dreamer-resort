import React, { Component } from "react";

class Inquiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      practitionerName: "",
    };
  }

  //toggle Open
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentDidMount() {
    const search = this.props.location.search;

    if (search) {
      const splitted = search.split("=")[1].split("+").join(" ");
      this.setState({ practitionerName: splitted });
    }
  }

  render() {
    const { practitionerName, isOpen } = this.state;

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
            {practitionerName && (
              <div className="form-header">
                <h5>Your Selection</h5>
                <p>{practitionerName}</p>
              </div>
            )}

            <form>
              <div className="form-group">
                <select name="title" id="title" className="form-control">
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
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="Message"
                  className="form-control"
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
