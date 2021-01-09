import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;

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
            <div className="form-group">
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
              <span className="fa fa-lock"></span>
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
