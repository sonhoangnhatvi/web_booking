import React from 'react';
import './HotelListType.css';
import HotelTypeItem from './HotelTypeItem';

// Hotel type data
const HOTEL_TYPE_DATA = [
  {
    "name": "Hotels",
    "count": 233,
    "image": "/images/type_1.webp"
  },
  {
    "name": "Apartments",
    "count": 2331,
    "image": "/images/type_2.jpg"
  },
  {
    "name": "Resorts",
    "count": 2331,
    "image": "/images/type_3.jpg"
  },
  {
    "name": "Villas",
    "count": 2331,
    "image": "/images/type_4.jpg"
  },
  {
    "name": "Cabins",
    "count": 2331,
    "image": "/images/type_5.jpg"
  }
]

const HotelListType = () => {
  return (
    <div className="hotel_type_area">
      <h3>Browse by property type</h3>
      <ul className="hotel_type_list">
        {/* Render hotel type list */}
        {HOTEL_TYPE_DATA.map((hotel_type) => (
          <HotelTypeItem data={hotel_type}></HotelTypeItem>
        ))}
      </ul>
    </div>
  )
};

export default HotelListType;
