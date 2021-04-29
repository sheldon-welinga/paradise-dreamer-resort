import React, { Component } from "react";
import { API_URL } from "../configure";

class HomeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counties: [],
      location: "Select location",
      listing: "Select listing",
    };
  }

  //fetch data from database/API
  fetchData = async () => {
    const response = await fetch(`${API_URL}/counties/`);
    const data = await response.json();

    this.setState({
      counties: data.sort((countyA, countyB) =>
        countyA.name > countyB.name ? 1 : -1
      ),
    });

    // return data;
  };

  componentDidMount() {
    this.fetchData();
  }

  //handle onChange functions of the select boxes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { counties, location, listing } = this.state;

    // console.log(
    //   counties.sort((countyA, countyB) =>
    //     countyA.name > countyB.name ? 1 : -1
    //   )
    // );
    return (
      <div className="home-search">
        <h2 className="title">Search for a hotel, resort or SPA</h2>
        <div className="home-search-form">
          <form>
            <div className="form-group select">
              <select
                name="location"
                id="location"
                className="form-control"
                value={location}
                onChange={this.handleChange}
              >
                <option value="Select location">Select City / Location</option>
                {counties.length > 0 &&
                  counties.map((county, index) => (
                    <option key={index} value={county.name}>
                      {county.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group select">
              <select
                name="listing"
                id="listing"
                className="form-control"
                value={listing}
                onChange={this.handleChange}
              >
                <option value="Select listing">Select Listing</option>
                <option value="hotel">Hotel</option>
                <option value="Resort">Resort</option>
                <option value="SPA">SPA</option>
              </select>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HomeSearch;
