import React from "react";

const ItemStyled = ({ backgroundName, title, count, icon }) => {
  return (
    <div className={`item-styled ${backgroundName}`}>
      <div className="item-styled-container">
        <div className="icon-container">
          <span className="icon">
            <span className={`fa fa-${icon}`}></span>
          </span>
        </div>
        <div className="text-container">
          <h3>{title}</h3>
          <h5>{count}</h5>
        </div>
      </div>
      <div className="progress">
        <span></span>
      </div>
    </div>
  );
};

export default ItemStyled;
