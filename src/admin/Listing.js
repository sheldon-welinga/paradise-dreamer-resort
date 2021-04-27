import React from "react";

const Listing = () => {
  return (
    <table className="listing">
      <thead>
        <tr className="listing-body">
          <th>Select</th>
          <th>Listing</th>
          <th>Name</th>
          <th>Date</th>
          <th>City</th>
          <th>Inquiry</th>
        </tr>
      </thead>
      <tbody className="listing-body-wrapper">
        {[1, 2, 3, 4].map((item) => (
          <tr className="listing-body" key={item}>
            <td className="listing-item">
              <input
                type="checkbox"
                className="listing-checkbox"
                id="listing-item"
                // hidden
              />
              <label htmlFor="listing-item"></label>
            </td>
            <td className="listing-item">
              <img src="/images/logo.jpg" alt="" />
            </td>
            <td className="listing-item">
              <p>Lake Palace Hotel</p>
              <p className="location">Beijing, China</p>
            </td>
            <td className="listing-item">09 April</td>
            <td className="listing-item">Hawaii</td>
            <td className="listing-item">
              <p>24</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// <div className="listing">
//   <div className="listing-header">
//     <td>Select</td>
//     <td>Listing</td>
//     <td>Name</td>
//     <td>Date</td>
//     <td>City</td>
//     <td>Inquiry</td>
//   </div>
//   <div className="listing-body-wrapper">

//   </div>
// </div>

export default Listing;
