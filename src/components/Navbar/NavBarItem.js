import React from 'react';
import './NavBarItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarItem = props => {
  // navbar_item_active is variable for navbar item have border or no.
  let navbar_item_active = props.data.active === true ? "navbar_item_active" : "";
  return (
    // Render navbar item
    <div className={`navbar__item ${navbar_item_active}`}>
      <FontAwesomeIcon icon={props.data.icon}></FontAwesomeIcon>
      <p className='navbar__item_description'>{props.data.type}</p>
    </div>
  );
}

export default NavBarItem;
