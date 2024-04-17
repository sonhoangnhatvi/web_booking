import React from "react";
import "./CityItem.css";

// Component CityItem
const CityItem = (city) => {
  return (
    // CityItem with background image
    <div className="city_item">
      <img
        src={process.env.PUBLIC_URL + city.data.image}
        alt={city.data.altText}
      />
      <div className="city_info">
        <h1>{city.data.name}</h1>
        <p>{city.data.subText}</p>
      </div>
    </div>
  );
};

export default CityItem;
