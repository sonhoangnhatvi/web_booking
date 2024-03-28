import React from "react";
import Button from "../UI/Button/Button";
import "./SearchPopup.css";

const SearchPopup = (props) => {
  // Render search popup  
  return (
    <div className={props.className}>
      <h2 className="search-popup-title">Search</h2>
      <label for="input-destination" className="search-popup-padding">Destination</label>
      <input type="text" id="input-destination" name="destination" value={``} />
      <label for="input-check-in-date" className="search-popup-padding">Check-in Date</label>
      <input type="text" id="input-check-in-date" name="check-in-date" value={`06/24/2022 to 06/24/2022`} />
      <label for="" className="search-popup-padding">Option</label>
      <div className="search_popup_options">
        <label className="label-for-input-min-price-per-night" for="input-min-price-per-night">Min price per night</label>
        <input type="text" id="input-min-price-per-night" name="destination" value={``} />
        <label className="label-for-input-max-price-per-night" for="input-max-price-per-night">Max price per night</label>
        <input type="text" id="input-max-price-per-night" name="destination" value={``} />
        <label className="label-for-input-adult" for="input-adult">Adult</label>
        <input type="text" id="input-adult" name="adult" value={``} />
        <label className="label-for-input-children" for="input-children">Children</label>
        <input type="text" id="input-children" name="Children" value={``} />
        <label className="label-for-input-room" for="input-room">Room</label>
        <input type="text" id="input-room" name="room" value={``} />
      </div>
      <Button className="btn_search_popup">Search</Button>
    </div>
  )
}

export default SearchPopup;
