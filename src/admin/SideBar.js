import React from "react";
import { Link, withRouter } from "react-router-dom";

const SideBar = ({ showSideMenu, ...props }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    props.history.push("/accounts/login");
  };

  return (
    <div className={`sidebar ${showSideMenu && "show"} `}>
      <div className="sidebar-logo">
        <img src="/images/logo.jpg" alt="Paradise dreamers logo" />
        <p className="text-icon">
          <span>Paradise</span>&nbsp;Dreamer
        </p>
      </div>
      <div className="main-sidebar-wrapper">
        <div className="main-sidebar-elements">
          <Link to="/dashboard" className="sidebar-item active">
            <span className="fa fa-home"></span>
            <span>Dashboard</span>
          </Link>
          <p className="sidebar-item">
            <span className="fa fa-calendar"></span>
            <span>Bookings</span>
          </p>
          <p className="sidebar-item">
            <span className="fa fa-users"></span>
            <span>Clients</span>
          </p>
          <p className="sidebar-item">
            <span className="fa fa-building"></span>
            <span>Hotels &amp; SPAs</span>
          </p>
          <p className="sidebar-item">
            <span className="fa fa-paper-plane"></span>
            <span>Mailbox</span>
          </p>
        </div>
        <div className="sidebar-signout">
          <p className="sidebar-item" onClick={handleLogout}>
            <span className="fa fa-sign-out"></span>
            <span>Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideBar);
