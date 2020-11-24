import React, { Component } from "react";
import SinglePractitioner from "../components/SinglePractitioner";
import Loading from "../components/Loading";
import SpaHeader from "../components/SpaHeader";
import { API_URL } from "../configure";

class Practitioners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      practitioners: [],
      error: "",
    };
  }

  fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/practitioner/`);
      const data = await response.json();

      return data;
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({ practitioners: data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  render() {
    const { practitioners, loading, error } = this.state;
    return (
      <>
        <SpaHeader />
        <div className="page-height practitioners">
          <div className="practitioners-header">
            <h6>Paradise Dreamer</h6>
            <h2>Visiting Practitioners' Calendar</h2>
          </div>
          <div className="practitioners-section">
            {error ? (
              <div className="error">{error}</div>
            ) : loading ? (
              <Loading />
            ) : (
              practitioners.map((practitioner) => (
                <SinglePractitioner
                  practitioner={practitioner}
                  key={practitioner._id}
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
