import React, { Component } from "react";
import Header from "./Header";
import ItemStyled from "./ItemStyled";
import SideBar from "./SideBar";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      token: "",
      success: "",
      showSideMenu: false,
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const message = JSON.parse(localStorage.getItem("message"));
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      this.props.history.push("/accounts/login");
    } else {
      this.setState({
        user,
        token,
        success: message,
      });

      setTimeout(() => {
        localStorage.removeItem("message");
        this.setState({ success: "" });
      }, 2000);
    }
  }

  toggleSidebar = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { success, user, showSideMenu } = this.state;

    return (
      <div className="page-height dashboard  ">
        {success && <div className="main-success">{success}</div>}
        <div>
          <SideBar showSideMenu={showSideMenu} />
          <div className={`main-dashboard ${showSideMenu && "show"}`}>
            <Header user={user} toggleSidebar={this.toggleSidebar} />
            <div className="dashboard-body ">
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
                  title="Rooms"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
