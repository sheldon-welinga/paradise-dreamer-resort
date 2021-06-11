import React from "react";

const ListingsFilter = () => {
  return (
    <div className="listings-filter">
      <div className="filter-section">
        <h2>Filter by:</h2>
      </div>
      <div className="filter-section">
        <h2>Amenities</h2>
        <p>
          <input type="checkbox" id="freeparking" />
          <label htmlFor="freeparking">Free Parking</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="breakfastincluded" />
          <label htmlFor="breakfastincluded">Breakfast Included</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="swimmingpool" />
          <label htmlFor="swimmingpool">Swimming Pool</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="spaandwellness" />
          <label htmlFor="spaandwellness">Spa and wellness centre</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="twinbeds" />
          <label htmlFor="twinbeds">Twin Beds</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="golfcourse" />
          <label htmlFor="golfcourse">Golf Course</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="beachfront" />
          <label htmlFor="beachfront">Beach Front</label>{" "}
        </p>
      </div>
      <div className="filter-section">
        <h2>Distance from</h2>
        <div className="form-group">
          <input
            type="search"
            placeholder="e.g. Nairobi, Kenya"
            className="form-control"
          />
        </div>

        <div className="form-group select">
          {/* className="input-field select inputs" */}
          <select name="distance" id="distance" className="form-control">
            <option value="Less than 1km">Less than 1km</option>
            <option value="Less than 2km">Less than 2km</option>
            <option value="Less than 5km">Less than 5km</option>
            <option value="Less than 8km">Less than 8km</option>
            <option value="Less than 10km">Less than 10km</option>
          </select>
        </div>
      </div>
      <div className="filter-section">
        <h2>Room Facilities</h2>
        <p>
          <input type="checkbox" id="airconditioning" />
          <label htmlFor="airconditioning">Air conditioning</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="privatebathrooms" />
          <label htmlFor="privatebathrooms">Private Bathrooms</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="washingmachine" />
          <label htmlFor="washingmachine">Washing Machine</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="flatsmarttv" />
          <label htmlFor="flatsmarttv">Flat/Smart TV</label>{" "}
        </p>
      </div>
      <div className="filter-section">
        <h2>Accessibility</h2>
        <p>
          <input type="checkbox" id="wheelchair" />
          <label htmlFor="wheelchair">Wheelchairs</label>{" "}
        </p>
        <p>
          <input type="checkbox" id="visualaids" />
          <label htmlFor="visualaids">Visual Aids</label>{" "}
        </p>
      </div>
    </div>
  );
};

export default ListingsFilter;
