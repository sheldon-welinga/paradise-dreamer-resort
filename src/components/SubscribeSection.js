import React from "react";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe">
        <h2 className="title">Subscribe for Latest &amp; Best Deals</h2>
        <p className="content">
          Signup for our weekly updates and Never miss a moment of the latest
          and great places to be
        </p>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-default">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
