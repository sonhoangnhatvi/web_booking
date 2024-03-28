import React from 'react';
import HotelItem from './HotelItem.js';
import './HotelList.css';

// Hotel list data
const HOTEL_LIST_DATA = [
  {
    "name": "Aparthotel Stare Miasto",
    "city": "Madrid",
    "price": 120,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "/images/hotel_1.webp"
  },
  {
    "name": "Comfort Suites Airport",
    "city": "Austin",
    "price": 140,
    "rate": 9.3,
    "type": "Exceptional",
    "image_url": "/images/hotel_2.jpg"
  },
  {
    "name": "Four Seasons Hotel",
    "city": "Lisbon",
    "price": 99,
    "rate": 8.8,
    "type": "Excellent",
    "image_url": "/images/hotel_3.jpg"
  },
  {
    "name": "Hilton Garden Inn",
    "city": "Berlin",
    "price": 105,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "/images/hotel_4.jpg"
  }
]

const HotelList = () => {
  return (
    <div className="hotel_area">
      <h3 className='hotel_list_title'>Home guests love</h3>
      {/* Render hotel list */}
      <ul className="hotel_list">
        {HOTEL_LIST_DATA.map((hotel) => (
          <HotelItem data={hotel}></HotelItem>
        ))}
      </ul>
    </div>
  )
}

export default HotelList;
