import React from 'react';
import Button from '../UI/Button/Button';
import "./Contact.css";

const Contact = () => {
  return (
    // Render Contact Component
    <div className="registration_form_area">
      <div className="registration_form_area_content">
        <h3>Save time, save money!</h3>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="registration_form">
          <input type="email" placeholder="Your Email"></input>
          <Button type="submit" className="btn_subscribe">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
