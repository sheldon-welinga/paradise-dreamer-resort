import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

class BookTreatment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      treatments: [],
      treatment: "Aphrodite Bath, 2 People (KES 13,228.08, 30 min)",
      guest: "One Guest",
      therapist: "Anyone",
      dates: [],
      date: "Select date",
      times: [],
      time: "Select time",
      amount: "",
    };
  }

  //Fetch data
  fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    return data.treatments;
  };

  //handle onChange functions of the select boxes
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //check the given times and return the appropriate time iterator
  timerCheck = (time) => {
    let times;

    if (time === 30) {
      times = this.timeIterator(time, 45);
    }

    if (time === 45) {
      times = this.timeIterator(time, 29);
    }

    if (time === 60) {
      times = this.timeIterator(time, 22);
    }

    if (time === 75) {
      times = this.timeIterator(time, 18);
    }

    if (time === 90) {
      times = this.timeIterator(time, 15);
    }

    if (time === 150) {
      times = this.timeIterator(time, 9);
    }

    if (time === 180 || time === 210) {
      times = this.timeIterator(time, 6);
    }

    if (time === 240) {
      times = this.timeIterator(time, 5);
    }

    return times;
  };

  //Handle treatment change (On treatment change change the specified times)
  handleTreatmentChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        let splitted = this.state.treatment.split(" ");
        let time = Number(splitted[splitted.length - 2]);
        let times = this.timerCheck(time);

        const bracketSplit = this.state.treatment.split("(");
        // console.log(bracketSplit[1]);

        this.fetchData().then((data) => {
          let foundAmount = data.find(
            (item) =>
              item.title === bracketSplit[0].trim() &&
              bracketSplit[1].split(" ")[1].includes(item.amount)
          );

          this.setState({
            amount: foundAmount.amount,
          });
        });

        this.setState({
          times: times,
        });
      }
    );
  };

  //split time to get am or pm
  splitter = (time) => {
    return time
      .toLocaleString("en-US", { hour: "numeric", hour12: true })
      .split(" ")[1];
  };

  //timer iterator
  timeIterator = (minutesToBeIterated, numberOfIteration) => {
    const date = new Date();

    date.setHours(9);
    date.setMinutes(30);

    let times = ["Select time"];

    for (let i = 0; i < numberOfIteration; i++) {
      let prevTime = `${date.getHours() % 12 === 0 ? 12 : date.getHours()}:${
        date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
      }`;

      let prevAMPM = this.splitter(date);

      date.setMinutes(date.getMinutes() + minutesToBeIterated);

      let nextTime = `${date.getHours() % 12 === 0 ? 12 : date.getHours()}:${
        date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
      }`;

      let nextAMPM = this.splitter(date);

      times = [...times, `${prevTime}${prevAMPM} - ${nextTime}${nextAMPM}`];
    }

    return times;
  };

  //get all dates
  getDates = () => {
    const date = new Date();
    let dates = ["Select date"];

    for (let i = 0; i < 31; i++) {
      dates = [...dates, date.toDateString()];
      date.setDate(date.getDate() + 1);
    }

    this.setState({
      dates: dates,
    });
  };

  //Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.date.toLowerCase() === "select date" &&
      this.state.time.toLowerCase() === "select time"
    ) {
      e.target.date.style.borderColor = "rgb(226, 67, 67)";
      e.target.time.style.borderColor = "rgb(226, 67, 67)";
    } else if (this.state.date.toLowerCase() === "select date") {
      e.target.date.style.borderColor = "rgb(226, 67, 67)";
      e.target.time.style.borderColor = "gray";
    } else if (this.state.time.toLowerCase() === "select time") {
      e.target.date.style.borderColor = "gray";
      e.target.time.style.borderColor = "rgb(226, 67, 67)";
    } else {
      e.target.time.style.borderColor = "gray";

      const details = {
        guests: 1,
        treatment: this.state.treatment,
        therapist: this.state.therapist,
        date: this.state.date,
        time: this.state.time,
        amount: this.state.amount,
      };

      localStorage.setItem("bookTreatmentDetails", JSON.stringify(details));

      this.props.history.push("/spa/treatments/guest-information");
    }
  };

  componentDidMount() {
    this.fetchData().then((data) => {
      const foundTreatment = data.find(
        (item) => item.slug === this.props.match.params.slug
      );

      const otherTreatments = data.filter(
        (item) => item.slug !== foundTreatment.slug
      );

      const allTreatments = [foundTreatment, ...otherTreatments];

      let initTime = Number(foundTreatment.time.split(" ")[0]);
      let times = this.timerCheck(initTime);

      this.setState({
        loading: false,
        treatments: allTreatments,
        treatment: `${foundTreatment.title} (KES ${foundTreatment.amount}, ${foundTreatment.time})`,
        times,
        amount: foundTreatment.amount,
      });
    });

    this.getDates();
  }

  render() {
    const {
      loading,
      treatments,
      guest,
      treatment,
      therapist,
      dates,
      date,
      times,
      time,
    } = this.state;

    return (
      <div className="page-height book-treatment">
        <div className="book-treatment-section-one">
          <h6>Paradise Dreamer Booking</h6>
          <h2>Book Your Treatment</h2>
          <Link to="/spa/treatments">Back to treatments list</Link>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="book-treatment-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <p>Number of guest(s)</p>
                <select name="guest" id="guest">
                  <option value={guest}>{guest}</option>
                </select>
              </div>
              <div className="form-group">
                <p>Treatment 1</p>
                <select
                  name="treatment"
                  id="treatment"
                  value={treatment}
                  onChange={this.handleTreatmentChange}
                >
                  {treatments.map((treatment) => (
                    <option
                      key={treatment.id}
                      value={`${treatment.title} (KES ${treatment.amount}, ${treatment.time})`}
                    >
                      {treatment.title} (KES {treatment.amount},{" "}
                      {treatment.time})
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <p>Therapist Preference</p>
                <select
                  name="therapist"
                  id="therapist"
                  value={therapist}
                  onChange={this.handleChange}
                >
                  <option value="Anyone">Anyone</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <p>Date</p>
                <select
                  name="date"
                  id="date"
                  value={date}
                  onChange={this.handleChange}
                >
                  {dates.length &&
                    dates.map((date, index) => (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <p>Time</p>
                <select
                  name="time"
                  id="time"
                  value={time}
                  onChange={this.handleChange}
                >
                  {times.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Book Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default BookTreatment;
