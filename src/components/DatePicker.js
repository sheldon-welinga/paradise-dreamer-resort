import React from "react";
import { useEffect } from "react";
import "../DatePicker.css";

const DatePicker = () => {
  const handleToggleDatePicker = (e) => {
    const dates = document.querySelector(".date-picker .dates");
    console.log(e.target.parentElement);
    if (!checkEventPathForClass(e.path, "dates")) {
      dates.classList.toggle("active");
    }
  };

  const checkEventPathForClass = (path, selector) => {
    for (let i = 0; i < path; i++) {
      if (path[i].classList && path[i].classList.contains(selector)) {
        return true;
      }
    }

    return false;
  };

  const renderCalendar = () => {
    // const date_picker = document.querySelector(".date-picker");
    // const selected_date = document.querySelector(".date-picker .selected-date");
    // const dates = document.querySelector(".date-picker .dates");
  };

  useEffect(() => {
    renderCalendar();
  }, []);
  return (
    <div className="page-height">
      <div className="date-picker" onClick={(e) => handleToggleDatePicker(e)}>
        <div className="selected-date">08/10/2020</div>
        <div className="dates">
          <div className="month">
            <i className="fa fa-angle-left prev"></i>
            <div className="mth"></div>
            <i className="fa fa-angle-right next"></i>
          </div>
          <div className="days"></div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
