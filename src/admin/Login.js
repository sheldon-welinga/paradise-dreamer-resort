import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../configure";
import { counterCheckerForClasses } from "../functions/checkerFucntions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
        //request to the server
        const configOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };

        const response = await fetch(`${API_URL}/admins/login`, configOptions);

        const responseMsg = await response.json();

        this.setState({ email: "", password: "" });

        if (responseMsg.error) {
          this.setState({
            error: responseMsg.error,
          });
        } else {
          this.setState({ success: responseMsg.message });

          localStorage.setItem("user", JSON.stringify(responseMsg.user));
          localStorage.setItem("token", JSON.stringify(responseMsg.token));
          localStorage.setItem("message", JSON.stringify(responseMsg.message));

          this.props.history.push("/dashboard");
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
    const { email, password, error, success } = this.state;

    return (
      <div className="page-height login">
        <div className="login-left-side">
          <h2>Welcome To Paradise Dreamer Resort &amp; Spa</h2>
          <Link to="/" className="main-site">
            Back to Main Site <span className="fa fa-long-arrow-right"></span>
          </Link>
        </div>
        <div className="login-right-side">
          <h2 className="title">Admin Login</h2>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/accounts/forgot-password" className="f-password">
              Forgot Password?
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
