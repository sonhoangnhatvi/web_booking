import React from "react";
import './CityItem.css';

// Component CityItem
const CityItem = (city) => {
  return (
    // CityItem with background image
    <div className="city_item" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + city.data.image})`,
      height: '300px',
      width: '380px',
      borderRadius: '20px'
    }}>
      {/* CityItem info */}
      <div className="city_info">
        <h1>{city.data.name}</h1>
        <p>{city.data.subText}</p>
      </div>
    </div>

  )
}

export default CityItem;
