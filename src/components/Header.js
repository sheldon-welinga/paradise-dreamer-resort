import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <div className="header-info">
        <div className="info-left">
          <span className="fa fa-phone"></span>
          <span>Call Us: +254703416363 | info@paradisedreamer.com</span>
        </div>
        <div className="info-right">
          <Link to="/">
            <span className="fa fa-facebook"></span>
          </Link>
          <Link to="/">
            <span className="fa fa-twitter"></span>
          </Link>
          <Link to="/">
            <span className="fa fa-google-plus"></span>
          </Link>
          <Link to="/">
            <span className="fa fa-instagram"></span>
          </Link>
        </div>
      </div>
      <nav className="header-nav">
        <div className="nav-logo">
          <div className="nav-brand">
            <Link to="/" className="text-icon">
              <span>Paradise </span>Dreamer
            </Link>
          </div>
          <div className="toggle-collapse" onClick={toggleNavigation}>
            <span className="fa fa-bars"></span>
          </div>
        </div>
        <ul className={isOpen ? "nav-menu show-nav" : "nav-menu"}>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/accomodation">Accomodation</Link>
          </li>
          <li className="nav-link">
            <Link to="/activities">Activities</Link>
          </li>
          <li className="nav-link">
            <Link to="/spa">SPA</Link>
          </li>
          <li className="nav-link">
            <Link to="/dinning">Dining</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
