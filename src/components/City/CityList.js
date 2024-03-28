import React from "react";
import CityItem from "./CityItem";
import './CityList.css';

// Data City list
const CITY_DATA = [
  {
    "name": "Dublin",
    "subText": "123 properties",
    "image": "/images/city_1.webp"
  },
  {
    "name": "Reno",
    "subText": "533 properties",
    "image": "/images/city_2.webp"
  },
  {
    "name": "Austin",
    "subText": "532 properties",
    "image": "/images/city_3.webp"
  }
]

// Component CityList
const CityList = (props) => {
  return (
    <ul className="city_list">
      {/* Render list city */}
      {CITY_DATA.map((city) => (
        <CityItem data={city}></CityItem>
      ))}
    </ul>
  )
}

export default CityList;
