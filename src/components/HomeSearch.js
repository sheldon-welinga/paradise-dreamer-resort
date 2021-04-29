import React, { Component } from "react";
import { API_URL } from "../configure";

class HomeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counties: [],
      location: "Select location",
      listing: "Select listing",
      //   country: "Select country",
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

    return (
      <div className="home-search">
        <h2 className="title">Search for a Hotel, Resort or SPA</h2>
        <div className="home-search-form">
          <form>
            {/* <div className="form-group select">
              <select
                name="country"
                id="country"
                className="form-control"
                value={country}
                onChange={this.handleChange}
              >
                <option value="Select country">Select Country</option>
                <option value="Kenya">Kenya</option>
              </select>
            </div> */}
            <div className="form-group search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a hotel, resort or SPA"
                className="form-control"
                // value={search}
                onChange={this.handleChange}
              />
            </div>
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
            {/* <div className="form-group form-amount">
              <label htmlFor="amount">Bookings Amount in Kshs.</label>
              <div>
                <input
                  type="text"
                  name="min-amount"
                  id="min"
                  placeholder="Min amount"
                  // value={min}
                  className="form-control"
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="max-amount"
                  id="max"
                  placeholder="Max amount"
                  // value={max}
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
            </div> */}
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
