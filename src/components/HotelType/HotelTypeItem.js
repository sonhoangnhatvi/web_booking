import React from 'react';
import './HotelTypeItem.css';

const HotelTypeItem = (hotel_type) => {
  return (
    // Render Hotel type item
    <li>
      <img className="hotel_type_item" src={hotel_type.data.image} alt="hotel type">
      </img>
      <div className="hotel_type_info">
        <h3>{hotel_type.data.name}</h3>
        <p>{hotel_type.data.count} hotels </p>
      </div>
    </li >
  )
};

export default HotelTypeItem;
