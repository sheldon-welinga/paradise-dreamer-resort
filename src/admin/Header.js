import React from "react";
import { withRouter } from "react-router-dom";

const Header = ({ user, toggleSidebar, ...props }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    props.history.push("/accounts/login");
  };

  return (
    <div className="admin-header">
      <div className="admin-header-left">
        <div>
          <span className="fa fa-bars" onClick={toggleSidebar}></span>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="search"
              name="search"
              autoComplete="off"
              placeholder="Search"
              className="form-control"
            />
          </div>
        </form>
        {/* <h5>Dashboard</h5> */}
      </div>
      <div className="admin-header-right">
        <div className="header-icons">
          <span className="icon-container">
            <span className="fa fa-bell"></span>
            <span className="text-counter">2</span>
          </span>
          <span className="icon-container">
            <span className="fa fa-envelope"></span>
            <span className="text-counter">3</span>
          </span>
        </div>
        <div className="avatar">
          <img src="/images/logo.jpg" alt="avatar" className="avatar-img" />
          {/* <p>{user.name}</p> */}
        </div>
        <div className="sidebar-signout">
          <p className="sidebar-item" onClick={handleLogout}>
            <span className="fa fa-sign-out"></span>&nbsp;
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
