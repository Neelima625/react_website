// Navbar2.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar2.css'; // custom CSS

const Navbar2 = () => {
  return (
    <div className="navbar2-container">
      <nav className="navbar2">
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/about" activeclassname="active">About us</NavLink>
        <NavLink to="/services" activeclassname="active">Services</NavLink>
        <NavLink to="/contact" activeclassname="active">Contact us</NavLink>
   
      </nav>
    </div>
  );
};

export default Navbar2;
