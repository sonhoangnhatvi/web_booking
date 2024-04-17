import React, { useState } from "react";
import "./Navbar.css";
import NavBarItem from "./NavBarItem";

// Navbar data
const NAVBAR_DATA = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const Navbar = (props) => {
  return (
    <div className="navbar__container">
      <p className="navbar__title">Booking WebSite</p>
      <div className="navbar_btn_group ">
        <button className="btn__register">Register</button>
        <button className="btn__login">Login</button>
      </div>

      <div className="navbar_items">
        {/* Render navbar list */}
        {NAVBAR_DATA.map((item, index) => (
          <NavBarItem key={index} data={item}></NavBarItem>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
