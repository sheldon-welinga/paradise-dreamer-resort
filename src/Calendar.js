import React, { useEffect } from "react";
import "./Calendar.css";

const Calendar = (props) => {
  //get today's date
  const today = new Date();
  // today.setDate(14);
  // today.setMonth(11);
  // today.setFullYear(2021);

  let selected = today;

  //get today's date in a day-month-year format
  const todayFormatted = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  // create month names array
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
  //create calendar
  const createCalendar = () => {
    //get calendar body element
    //remove all content from the calendar body
    const calendarBody = document.querySelector(".calendar-body");
    calendarBody.innerHTML = "";

    //get the last date of the month
    //get the previous month last date
    const date = new Date(selected.getFullYear(), selected.getMonth() + 1, 0);
    const prevDate = new Date(selected.getFullYear(), selected.getMonth(), 0);

    //get calendar header element
    //change the current month in the header based on the selected date
    const calendarHeader = document.querySelector(".calendar-header");
    calendarHeader.querySelector(".current-month").innerHTML = `
    ${months[selected.getMonth()]} - ${selected.getFullYear()}`;

    //get number of days in selected month
    //get the first days of the month - Mon, Tue...
    //set days of the week  in order - 0 is Sunday
    const daysInMonth = date.getDate();
    const firstDayInMonth = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      1
    ).getDay();
    const daysInWeek = [1, 2, 3, 4, 5, 6, 0];

    //set the number of rows  and columns
    const rows = 6; //there can be max 6 weeks in month, if month has 31 days and 1st day is on Sunday then the last 2 days are in 6th week
    const columns = 7; //because there are 7 days per week

    //Get Starting point - from which day should current month start in the row (in which column)
    //Get previous month starting point - if current month start on wednesday and prev month has 30days then this should be 29
    let startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
    let prevStartingDay =
      prevDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;

    //set the counter for the current month
    //set the counter for the next month
    let x = 1;
    let nextMonthStart = 1;

    //loop through rows
    for (let i = 1; i < rows + 1; i++) {
      //create row element
      const row = document.createElement("div");
      row.classList.add("row");

      //loop through columns
      for (let j = 1; j < columns + 1; j++) {
        //create column element
        const column = document.createElement("div");
        column.classList.add("box");

        //create element for number
        //appemd number element to column
        const numberEl = document.createElement("span");
        column.appendChild(numberEl);

        //check if inside first row
        if (i === 1) {
          //check if current column is less than current month starting point
          if (j < startingPoint) {
            //in this case populate last Month days
            //Add class prev-month, set date to data-date attribute
            //insert the day inside column number element
            //increase prevStartingDays by 1
            column.classList.add("prev-month");

            column.setAttribute(
              "data-date",
              `${
                selected.getMonth() === 0
                  ? selected.getFullYear() - 1
                  : selected.getFullYear()
              }-${selected.getMonth() === 0 ? 12 : selected.getMonth()}-${
                prevStartingDay < 10 ? `0${prevStartingDay}` : prevStartingDay
              }`
            );

            numberEl.innerHTML = prevStartingDay;
            prevStartingDay++;
          } else {
            //if inside current month
            //set date to date-date attribute
            //insert the day inside column number element
            //increate current month counter by 1
            column.setAttribute(
              "data-date",
              `${selected.getFullYear()}-${selected.getMonth() + 1}-${
                x < 10 ? `0${x}` : x
              }`
            );
            numberEl.innerHTML = x;
            x++;
          }
        } else if (i > 1 && x < daysInMonth + 1) {
          //check if in current month range after first row
          //set date to data-date attribute
          //insert the day inside the column number element
          //increase current month counter by 1
          column.setAttribute(
            "data-date",
            `${selected.getFullYear()}-${selected.getMonth() + 1}-${
              x < 10 ? `0${x}` : x
            }`
          );
          numberEl.innerHTML = x;
          x++;
        } else {
          //in next month
          //add class next-month, insert the day inside column number element
          //set date to data-date attribute
          //increase next month counter by 1
          column.classList.add("next-month");
          numberEl.innerHTML = nextMonthStart;
          column.setAttribute(
            "data-date",
            `${
              selected.getMonth() + 2 === 13
                ? selected.getFullYear() + 1
                : selected.getFullYear()
            }-${selected.getMonth() + 2 === 13 ? 1 : selected.getMonth() + 2}-${
              nextMonthStart < 10 ? `0${nextMonthStart}` : nextMonthStart
            }`
          );
          nextMonthStart++;
        }

        checkDates(column);

        //append column to row
        row.appendChild(column);
      }

      //append row to calendar body
      calendarBody.appendChild(row);
    }
  };

  const checkDates = (col) => {
    const dataSetValue = col.dataset.date;
    const dataSetDate = new Date(dataSetValue);
    const todayStringDate = new Date(todayFormatted);

    if (dataSetDate.toDateString() === todayStringDate.toDateString()) {
      col.classList.add("today");
    }

    if (dataSetDate < todayStringDate) {
      col.classList.add("prev-dates");
    } else {
      col.addEventListener("click", () => {
        // console.log(dataSetValue);
        props.onChangeDate(dataSetValue);
        //set the value to the state
      });
    }
  };

  //get prev month
  const getPrevMonth = (e) => {
    e.preventDefault();
    selected = new Date(selected.getFullYear(), selected.getMonth() - 1, 1);
    renderCalendar(this);
  };

  const getNextMonth = (e) => {
    e.preventDefault();
    selected = new Date(selected.getFullYear(), selected.getMonth() + 1, 1);
    renderCalendar(this);
  };

  //render the calendar
  const renderCalendar = () => {
    //set the current month and date

    document.querySelector(".current-month").innerHTML = `${
      selected.getMonth() + 1
    } - ${selected.getFullYear()}`;

    // const calendarBodyElem = document.querySelector(".calendar-body");
    const prevMonth = document.querySelector(".prev-month");
    const nextMonth = document.querySelector(".next-month");

    prevMonth.addEventListener("click", getPrevMonth);
    nextMonth.addEventListener("click", getNextMonth);

    createCalendar();
  };

  useEffect(() => {
    renderCalendar();
  });
  //display calendar
  // componentDidMount() {
  //   this.renderCalendar();
  // }

  return (
    <div className="calendar" data-calendar>
      <div className="calendar-header">
        <div className="calendar-header-top">
          <button className="c-btn prev-month">
            <span>&larr;</span>
          </button>
          <h2 className="current-month"> </h2>
          <button className="c-btn next-month">
            <span>&rarr;</span>
          </button>
        </div>
        <div className="calendar-header-days row">
          <div className="column">Mon</div>
          <div className="column">Tue</div>
          <div className="column">Wed</div>
          <div className="column">Thu</div>
          <div className="column">Fri</div>
          <div className="column">Sat</div>
          <div className="column">Sun</div>
        </div>
      </div>
      <div className="calendar-body"></div>
    </div>
  );
};

export default Calendar;
