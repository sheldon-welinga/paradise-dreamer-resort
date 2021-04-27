import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../configure";
import {
  classChecker,
  counterCheckerForClasses,
  resetCounterCheckerForClasses,
} from "../functions/checkerFucntions";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      password: "",
      confirmPassword: "",
      email: sessionStorage.getItem("activeEmail"),
      error: "",
      success: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
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
        const { confirmPassword, password } = this.state;

        if (password.trim().length < 8) {
          classChecker(formGroups[1], "success", "invalid-error");
          classChecker(formGroups[1], "success", "password-short");
        } else if (confirmPassword.trim().length < 8) {
          classChecker(formGroups[1], "invalid-error", "success");
          classChecker(formGroups[1], "password-short", "success");

          classChecker(formGroups[2], "success", "invalid-error");
          classChecker(formGroups[2], "success", "password-short");
        } else if (password.trim() !== confirmPassword.trim()) {
          classChecker(formGroups[2], "success", "invalid-error");
          classChecker(formGroups[2], "success", "password-unmatch");
        } else {
          classChecker(formGroups[2], "invalid-error", "success");
          classChecker(formGroups[2], "password-unmatch", "success");

          //if all checks are true reset the password
          const configOptions = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };

          const response = await fetch(
            `${API_URL}/admins/reset-password`,
            configOptions
          );

          const responseMsg = await response.json();

          this.setState({ otp: "", password: "", confirmPassword: "" });
          resetCounterCheckerForClasses(formGroups, "success");

          if (responseMsg.error) {
            this.setState({
              error: responseMsg.error,
            });
          } else {
            localStorage.setItem("user", JSON.stringify(responseMsg.user));
            localStorage.setItem("token", JSON.stringify(responseMsg.token));
            localStorage.setItem(
              "message",
              JSON.stringify(responseMsg.message)
            );

            this.props.history.push("/dashboard");
          }

          setTimeout(() => {
            this.setState({
              error: "",
              success: "",
            });
          }, 7000);
        }
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
    const { otp, password, confirmPassword, error, success } = this.state;

    return (
      <div className="page-height reset-password">
        <div className="reset-password-left-side">
          <h2>Welcome To Paradise Dreamer Resort &amp; Spa</h2>
          <Link to="/" className="main-site">
            Back to Main Site <span className="fa fa-long-arrow-right"></span>
          </Link>
        </div>
        <div className="reset-password-right-side">
          <h2 className="title">Forgot Password</h2>
          {error && <div className="error">{error}</div>}
          {success && <div className="main-success">{success}</div>}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/* <span className="fa fa-user"></span> */}
              <input
                type="number"
                name="otp"
                id="otp"
                className="form-control"
                autoComplete="off"
                placeholder="Reset Code"
                value={otp}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                autoComplete="off"
                placeholder="Confirm Password"
                value={confirmPassword}
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

export default ResetPassword;
