import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="page-height error-page">
      <div>
        <h2>404 ERROR</h2>
        <p>Oops!! Seems the page you are looking for doesn't exist</p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
