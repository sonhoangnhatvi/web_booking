import React from 'react';
import './HotelItem.css';
import { Link } from 'react-router-dom';

const HotelItem = (hotel) => {
  return (
    // Render hotel item
    <li>
      <img className="hotel_item" src={hotel.data.image_url} alt="hotel type">
      </img>
      <div className="hotel_info">
        <Link className='hotel_name' to="/detail">{hotel.data.name}</Link>
        <h3 className='hotel_city'>{hotel.data.city}</h3>
        <h3 className='hotel_price'>Starting from ${hotel.data.price}</h3>
        <div className='rating_info'>
          <p className='rating_score'>{hotel.data.rate}</p>
          <p className='rating_type'>{hotel.data.type}</p>
        </div>
      </div>
    </li >
  )
};

export default HotelItem;
