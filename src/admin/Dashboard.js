import React, { useEffect, useState } from "react";
import Header from "./Header";
import ItemStyled from "./ItemStyled";
import ListingInquiry from "./ListingInquiry";
import SideBar from "./SideBar";

const Dashboard = (props) => {
  const [user, setUser] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    const message = JSON.parse(localStorage.getItem("message"));
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      props.history.push("/accounts/login");
    }

    setUser(parsedUser);
    setSuccessMessage(message);

    setTimeout(() => {
      localStorage.removeItem("message");
      setSuccessMessage("");
    }, 2000);
  }, [props.history]);

  const toggleSidebar = () => {
    setShowSideMenu(!showSideMenu);
  };

  const today = new Date(Date.now());

  const startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).toDateString();

  const currentDate = today.toDateString();

  return (
    <div className="page-height dashboard  ">
      {successMessage && <div className="main-success">{successMessage}</div>}
      <div>
        <SideBar showSideMenu={showSideMenu} />
        <div className={`main-dashboard ${showSideMenu && "show"}`}>
          <Header user={user} toggleSidebar={toggleSidebar} />
          <div className="dashboard-body ">
            <div className="dashboard-header">
              <div className="dashboard-header-left">
                <h5>Dashboard</h5>
                <p>
                  <span>Home</span>&nbsp;/&nbsp;<span>Analytics</span>
                </p>
              </div>
              <div className="dashboard-header-right">
                <p>
                  <span className="fa fa-calendar"></span>&nbsp;
                  <span>
                    {startDate} - {currentDate}
                  </span>
                </p>
              </div>
            </div>
            <div className="dashboard-body-top">
              <ItemStyled
                backgroundName="bg-blue"
                title="Total Bookings"
                icon="briefcase"
                count="100"
              />
              <ItemStyled
                backgroundName="bg-orange"
                title="Clients"
                icon="users"
                count="34"
              />
              <ItemStyled
                backgroundName="bg-dark-maroon"
                title="Hotels & SPAs"
                icon="bed"
                count="50"
              />
              <ItemStyled
                backgroundName="bg-purple"
                title="Mailbox"
                icon="volume-control-phone"
                count="72"
              />
              <ItemStyled
                backgroundName="bg-success"
                title="Total Earnings"
                icon="money"
                count="KES 7,975"
              />
            </div>
            <div className="dashboard-listings">
              <ListingInquiry title="Listing Inquiry" />
              <ListingInquiry title="Hotel Bookings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
