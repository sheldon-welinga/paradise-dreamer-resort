import React from "react";
import { Link } from "react-router-dom";

const SpaHeader = () => {
  const toggleNavOpen = (e) => {
    if (e.target.parentElement.classList.contains("open")) {
      e.target.parentElement.classList.remove("open");
    } else {
      e.target.parentElement.classList.add("open");
    }
  };

  return (
    <div className="spa-header">
      <Link to="/spa/personalized-wellness">Personalized Wellness</Link>
      <Link to="/spa/treatments">Treatments</Link>
      <Link to="/spa/visiting-practitioners-calendar">
        Visiting Practitioners
      </Link>
      <span className="spa-toggler" onClick={toggleNavOpen}></span>
    </div>
  );
};

export default SpaHeader;
