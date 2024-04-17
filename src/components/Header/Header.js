import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from "react-router-dom";

// Header component
const Header = (props) => {
  // Default data for DateRange
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  // Option format date
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  // Value default for inputDate
  const valueDateInputShow = `${selectionRange.startDate.toLocaleDateString(
    "en-GB",
    options
  )} to ${selectionRange.endDate.toLocaleDateString("en-GB", options)}`;

  // UseState for value of inputDate
  const [inputDate, setInputDate] = useState(valueDateInputShow);

  // UseState for value of DateRange
  const [dateRange, setDateRange] = useState(selectionRange);

  // Function for event onChange of DateRange
  const handleSelect = (ranges) => {
    // When user changes selection on DateRange, update ranges, and update value of inputDate
    setDateRange(ranges.selection);
    setInputDate(
      `${ranges.selection.startDate.toLocaleDateString(
        "en-GB",
        options
      )} to ${ranges.selection.endDate.toLocaleDateString("en-GB", options)}`
    );
  };

  // UseState for status show/hide DateRange
  const [showDateRange, setShowDateRange] = useState(false);

  // Function for event onClick of inputDate
  const handleButtonClick = (event) => {
    console.log(event.target);
    setShowDateRange(!showDateRange);
  };

  return (
    // Header component
    <div className="header_component">
      <h2> A lifetime of discounts ? It's Genius</h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button className="btn_sign_in_register">Sign in / Register</button>
      {/* Search area */}
      <div className="search_area">
        <div>
          <FontAwesomeIcon icon="fa-bed"></FontAwesomeIcon>
          <input
            className="search_keyword"
            placeholder="Where are you going ?"
          ></input>
        </div>
        <div className="date_input_area">
          <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
          {/* Input for date range, click to show/ hide DateRange*/}
          <input
            className="date_input"
            onClick={handleButtonClick}
            placeholder={inputDate}
            readonly
          ></input>
          {/* Handle show/hide DateRange*/}
          {showDateRange && (
            <div className="date-range">
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date"
                minDate={new Date()}
                ranges={[dateRange]}
                onChange={handleSelect}
              />
            </div>
          )}
        </div>
        {/* Room info */}
        <div className="room_info">
          <FontAwesomeIcon icon="fa-person" />
          <p>1 adult - 0 children - 1room</p>
        </div>
        {/*Search link to /search*/}
        <Link
          className="btn_search"
          // to="/search"
          to=""
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
