import React, { Component } from "react";
import ReservationSteps from "../components/ReservationSteps";

class ReservationConfirm extends Component {
  render() {
    return (
      <div className="page-height reservation-confirm">
        <ReservationSteps steps={3} />
      </div>
    );
  }
}

export default ReservationConfirm;
