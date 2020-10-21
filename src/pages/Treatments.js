import React, { Component } from "react";
import Loading from "../components/Loading";
import SingleTreatment from "../components/SingleTreatment";

class Treatments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: [],
      loading: true,
      error: "",
      types: [],
      treatmentType: "All Treatments",
    };
  }

  toggleClose = (e) => {
    if (e.target.parentElement.classList.contains("close")) {
      e.target.parentElement.classList.remove("close");
    } else {
      e.target.parentElement.classList.add("close");
    }
  };

  fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      return data.treatments;
    } catch (err) {
      return this.setState({
        error: err.message,
      });
    }
  };

  getTreatments = async () => {
    const data = await this.fetchData();

    this.setState({
      treatments: data,
      types: [...data.map((treatment) => treatment.type)],
    });

    // console.log(data);
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
    this.getTreatments();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });

    this.fetchData().then((data) => {
      if (this.state.treatmentType === "All Treatments") {
        this.setState({
          treatments: data,
        });
      } else {
        this.setState({
          treatments: data.filter(
            (treatment) => treatment.type === this.state.treatmentType
          ),
        });
      }
    });
  };

  render() {
    const { loading, error, treatments, treatmentType } = this.state;

    let allTypes = ["All Treatments", ...new Set(this.state.types)];

    return (
      <div className="page-height treatments">
        <div className="treatments-section-one">
          <div className="content">
            <h6>Paradise Dreamers Zighy Bay</h6>
            <h2>Spa Treatments</h2>
            <p>
              Surrender to the healing hands of our skilled therapists through
              specialty treatments and individual journeys that ensure your
              senses are balanced and mind is blissful. We use natural and
              ethically-produced products together with traditional and
              locally-inspired practices to treat you from the inside out and
              outside in.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/treatment-5.jpeg"
              alt="Woman sleeping"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="treatments-section-two">
          <div className="search-bar">
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a treatment"
                className="form-control"
              />
            </form>
            <select
              name="treatmentType"
              id="treatmentType"
              value={treatmentType}
              onChange={this.handleChange}
            >
              {allTypes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="content">
            All spa treatment prices are subject to government tax and service
            charge.
          </div>
        </div>
        <div className="treatments-section-three">
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="error">
              Oops!! An error occurred while fetching your data. <br /> {error}
            </div>
          ) : (
            <>
              {treatments.map((treatment) => (
                <SingleTreatment
                  key={treatment.id}
                  toggleClose={this.toggleClose}
                  treatment={treatment}
                />
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Treatments;
