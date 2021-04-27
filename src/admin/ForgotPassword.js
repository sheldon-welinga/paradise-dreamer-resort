import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../configure";
import {
  counterCheckerForClasses,
  resetCounterCheckerForClasses,
} from "../functions/checkerFucntions";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: "",
      success: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const formGroups = [...document.querySelectorAll(".form-group")];

    const counter = counterCheckerForClasses(
      formGroups,
      "invalid-error",
      "success",
      "none"
    );

    if (counter >= formGroups.length) {
      try {
        const configOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };

        sessionStorage.setItem("activeEmail", this.state.email);

        const response = await fetch(
          `${API_URL}/admins/forgot-password`,
          configOptions
        );

        const responseMsg = await response.json();

        this.setState({ email: "" });

        resetCounterCheckerForClasses(formGroups, "success");

        if (responseMsg.error) {
          this.setState({
            error: responseMsg.error,
          });
        } else {
          this.setState({
            success: responseMsg.message,
          });

          setTimeout(() => {
            this.props.history.push("/accounts/reset-password");
          }, 4000);
        }

        setTimeout(() => {
          this.setState({
            error: "",
            success: "",
          });
        }, 7000);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const { email, error, success } = this.state;

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
          {error && <div className="error">{error}</div>}
          {success && <div className="main-success">{success}</div>}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <span className="fa fa-user"></span>
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
