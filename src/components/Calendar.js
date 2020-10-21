import React from "react";
// import { useEffect } from "react";
import styles from "../Calendar.module.css";

const Calendar = () => {
  const date = new Date();
  date.setDate(1);

  const currentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = currentMonth.getDate();
  // const prevLastDay = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   0
  // ).getDate();
  const firstDayIndex = date.getDay();

  let lastDayIndex = currentMonth.getDay();
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

  const nextDays = 7 - lastDayIndex - 1;

  // const renderCalendar = () => {
  //   console.log([...Array(lastDay).keys()]);
  //   [...Array(lastDay).keys()].map((item) => (
  //     <div className="calendar-days">{item + 1}</div>
  //   ));
  // for (let j = firstDayIndex; j >= 0; j--) {
  //   return (
  //     <div className={styles.prevdate} id="prevdate">
  //       {prevLastDay - j}
  //     </div>
  //   );
  // }
  // for (let i = 1; i <= lastDay; i++) {
  //   if (
  //     i === new Date().getDate() &&
  //     date.getMonth() === new Date().getMonth() &&
  //     date.getFullYear() === new Date().getFullYear()
  //   ) {
  //     return (
  //       <div className={styles.today} id="today">
  //         {i}
  //       </div>
  //     );
  //   } else return <div className="calendar-days">{i}</div>;
  // }
  // for (let k = 1; k <= nextDays; k++) {
  //   return (
  //     <div className={styles.nextdate} id="nextdate">
  //       {k}
  //     </div>
  //   );
  // }
  // };

  console.log([...Array(firstDayIndex).keys()]);
  console.log(firstDayIndex);

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.month}>
          <i className="fa fa-angle-left prev"></i>
          <div className={styles.date} id="date">
            <h1>{months[date.getMonth()]}</h1>
            <p>{date.toDateString()}</p>
          </div>
          <i className="fa fa-angle-right next"></i>
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
        <div className={styles.days} id="days">
          {[...Array(lastDay).keys()].map((item) => {
            if (
              item + 1 === new Date().getDate() &&
              date.getMonth() === new Date().getMonth() &&
              date.getFullYear() === new Date().getFullYear()
            )
              return (
                <div className={styles.today} id="today" key={item}>
                  {item + 1}
                </div>
              );
            return (
              <div className="calendar-days" key={item}>
                {item + 1}
              </div>
            );
          })}
          {nextDays > 0 &&
            [...Array(1).keys()].map((item) => (
              <div className={styles.nextdate} id="nextdate" key={item}>
                {item + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
