import React, { Component } from "react";
import SinglePractitioner from "../components/SinglePractitioner";
import Loading from "../components/Loading";
import SpaHeader from "../components/SpaHeader";

class Practitioners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      practitioners: [],
    };
  }

  fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return data.practitioners;
    } catch (err) {
      console.log(err.message);
    }
  };

  componentDidMount() {
    this.fetchData().then((data) => {
      this.setState({ practitioners: data, loading: false });
    });
  }

  render() {
    const { practitioners, loading } = this.state;
    return (
      <>
        <SpaHeader />
        <div className="page-height practitioners">
          <div className="practitioners-header">
            <h6>Paradise Dreamer</h6>
            <h2>Visiting Practitioners' Calendar</h2>
          </div>
          <div className="practitioners-section">
            {loading ? (
              <Loading />
            ) : (
              practitioners.map((practitioner) => (
                <SinglePractitioner
                  practitioner={practitioner}
                  key={practitioner.id}
                />
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Practitioners;
