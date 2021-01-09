import React, { Component } from "react";
import { Link } from "react-router-dom";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { email } = this.state;

    return (
      <div className="page-height forgot-password">
        <div className="forgot-password-left-side">
          <h2>Welcome To Paradise Dreamer Resort &amp; Spa</h2>
          <Link to="/" className="main-site">
            Back to Main Site <span className="fa fa-long-arrow-right"></span>
          </Link>
        </div>
        <div className="forgot-password-right-side">
          <h2 className="title">Forgot Password</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                autoComplete="off"
                placeholder="Email address"
                value={email}
                onChange={this.handleChange}
              />
              <span className="fa fa-user"></span>
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
            <Link to="/accounts/login" className="b-login">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
