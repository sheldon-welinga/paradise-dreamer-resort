import React, { Component } from "react";
import Loading from "../components/Loading";
import SingleTreatment from "../components/SingleTreatment";
import SpaHeader from "../components/SpaHeader";

class Treatments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: [],
      loading: true,
      error: "",
      types: [],
      treatmentType: "All Treatments",
      search: "",
      min: 0,
      max: 0,
    };
  }

  toggleClose = (e) => {
    if (e.target.parentElement.classList.contains("close")) {
      e.target.parentElement.classList.remove("close");
    } else {
      e.target.parentElement.classList.add("close");
    }
  };

  //fetch data from the database
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

  //get all treatments and update the state
  getTreatments = async () => {
    const data = await this.fetchData();

    const allAmounts = data
      .map((item) => parseFloat(item.amount.split(",").join("")).toFixed(2))
      .sort((a, b) => a - b);

    this.setState({
      treatments: data,
      types: [...data.map((treatment) => treatment.type)],
      max: allAmounts[allAmounts.length - 1],
    });
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
    this.getTreatments();
  }

  //filter Treatment data
  filterTreatment = () => {
    this.fetchData().then((data) => {
      const { search, treatmentType, min, max } = this.state;
      parseFloat(min);
      parseFloat(max);

      let tempTreatments = [...data];

      let link = `/spa/treatments?`;

      const treatmentTypeLink = treatmentType
        .toLowerCase()
        .split(" ")
        .join("+");

      const searchLink = search.toLowerCase().split(" ").join("+");

      // if (treatmentType === "All Treatments") {
      //   link += `treatment-type=${treatmentTypeLink}`;
      // }

      //filter by treatment type
      if (treatmentType !== "All Treatments") {
        tempTreatments = tempTreatments.filter(
          (treatment) => treatment.type === treatmentType
        );
      }
      link += `treatment-type=${treatmentTypeLink}`;

      //filter by search
      if (search) {
        tempTreatments = tempTreatments.filter((treatment) =>
          treatment.title.toLowerCase().includes(search.toLowerCase())
        );
        link += `&search=${searchLink}`;
      }

      //filter by minimum amount
      tempTreatments = tempTreatments.filter(
        (treatment) => parseFloat(treatment.amount.split(",").join("")) >= min
      );
      if (min > 0) link += `&min-amount=${min}`;

      // filter by  maximum amount
      tempTreatments = tempTreatments.filter(
        (treatment) => parseFloat(treatment.amount.split(",").join("")) <= max
      );
      if (max > 0) link += `&max-amount=${max}`;

      //change state
      this.setState({
        treatments: tempTreatments,
      });

      //push the search props
      this.props.history.push(link);
    });
  };

  //handleData change
  handleChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      this.filterTreatment
    );
  };

  render() {
    const {
      loading,
      error,
      treatments,
      treatmentType,
      search,
      max,
      min,
    } = this.state;

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
        <SpaHeader />
        <div className="treatments-section-two">
          <div className="search-bar">
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a treatment"
                className="form-control"
                value={search}
                onChange={this.handleChange}
              />
              <div className="select">
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

              <div className="form-group">
                <label htmlFor="amount">Treatment Amount in Kshs.</label>
                <div>
                  <input
                    type="text"
                    name="min-amount"
                    id="min"
                    placeholder="Min amount"
                    value={min}
                    className="form-control"
                    onChange={this.handleChange}
                  />

                  <input
                    type="text"
                    name="max-amount"
                    id="max"
                    placeholder="Max amount"
                    value={max}
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
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
              {treatments.length ? (
                treatments.map((treatment) => (
                  <SingleTreatment
                    key={treatment.id}
                    toggleClose={this.toggleClose}
                    treatment={treatment}
                  />
                ))
              ) : (
                <div className="error treatment-error">
                  <p className="main-error">
                    Oops!!! No such treatment found for "{search}".
                  </p>
                  <p>- Check your spelling for typing errors</p>
                  <p>- Try searching with short and simple keywords</p>
                  <p>
                    - Try searching more general terms - you can then filter the
                    search results
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Treatments;
