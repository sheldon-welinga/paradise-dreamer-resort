import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ExperiencesHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isOpen
          ? "experiences-header show-experience-header"
          : "experiences-header"
      }
    >
      <NavLink to="/experiences/adventure">Adventure</NavLink>
      <NavLink to="/experiences/family">Family</NavLink>
      <NavLink to="/experiences/nature-discovery-centre">
        Nature Discovery Centre
      </NavLink>
      <span onClick={handleClick}></span>
    </div>
  );
};

export default ExperiencesHeader;
