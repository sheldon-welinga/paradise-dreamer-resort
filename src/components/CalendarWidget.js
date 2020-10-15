import React from "react";
import { useEffect } from "react";
import styles from "../Calendar.module.css";

const Calendar = () => {
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector("#days");
    const currentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDay = currentMonth.getDate();

    let days = "";

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    // console.log(prevLastDay);

    const firstDayIndex = date.getDay();
    let lastDayIndex = currentMonth.getDay();

    // if (lastDayIndex >= 6) {
    //   lastDayIndex = 0;
    // }

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    document.querySelector("#date h1").innerHTML = months[date.getMonth()];
    document.querySelector("#date p").innerHTML = date.toDateString();

    for (let j = firstDayIndex; j >= 0; j--) {
      days += `<div className=${styles.prevdate} id="prevdate">${
        prevLastDay - j
      }</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        days += `<div className="${styles.today} calendar-days" id="today">${i}</div>`;
      } else {
        days += `<div className="calendar-days">${i}</div>`;
      }

      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        days += `<div className=${styles.today} id="today">
        ${i}
      </div>`;
      } else {
        days += `<div className="calendar-days">${i}</div>`;
      }

      monthDays.innerHTML = days;
    }

    for (let k = 1; k <= nextDays; k++) {
      days += `<div className="${styles.nextdate} nextdate" id="nextdate" >${k}</div>`;
      monthDays.innerHTML = days;
    }
  };

  useEffect(() => {
    renderCalendar();
    // const ddd = document.getElementById("nextdate");
  }, []);

  const handlePrevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  };

  const handleNextMonth = () => {
    date.setMonth(date.getMonth() + 1);

    if (date.getMonth() > 11) {
      date.setFullYear(date.getFullYear() + 1);
    }
    renderCalendar();
  };

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.month}>
          <i className="fa fa-angle-left prev" onClick={handlePrevMonth}></i>
          <div className={styles.date} id="date">
            <h1>May</h1>
            <p>Fri May 29, 2020</p>
          </div>
          <i className="fa fa-angle-right next" onClick={handleNextMonth}></i>
        </div>
        <div className={styles.weekdays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className={styles.days} id="days"></div>
      </div>
    </div>
  );
};

export default Calendar;
