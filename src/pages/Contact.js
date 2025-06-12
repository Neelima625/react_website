import React from "react";
import "./Contact.css";
import Navbar from './Navbar'
import Footer from "./footer";
const Contact = () => {
  return (
   <>
   <Navbar></Navbar>
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
          />
        </div>
        <div className="contact-text">
          <h2>Get in Touch</h2>
          <p>
            You may contact us using the information below. We are always ready to assist you with your needs.
          </p>

          <ul>
            <li>
              <strong>Registered Address:</strong><br />
              10-100 HMT NAGAR STNUMBER 10,<br />
              NACHARAM, HYDERABAD, Telangana,<br />
              PIN: 500076.
            </li>
            <li>
              <strong>Telephone No:</strong> +91 9100748033
            </li>
            <li>
              <strong>E-Mail ID:</strong> support@paymanfintech.in
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer></>
  );
};

export default Contact;
