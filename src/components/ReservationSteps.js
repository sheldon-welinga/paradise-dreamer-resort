import React from "react";

const ReservationSteps = ({ steps }) => {
  return (
    <div className="reservation-steps">
      <p className={steps >= 1 ? "success-steps" : " "}>Plan Your Stay</p>
      <p className={steps >= 2 ? "success-steps" : " "}>Choose your room</p>
      <p className={steps >= 3 ? "success-steps" : ""}>Confirm your stay</p>
      <p className={steps >= 4 ? "success-steps" : ""}>Personalize Your stay</p>
    </div>
  );
};

export default ReservationSteps;
