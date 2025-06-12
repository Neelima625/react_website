// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section contact-info">
          <h3>PAYMAN FINTECH SOLUTIONS PVT LTD</h3>
          <p>10-100 HMT NAGAR STNUMBER 10,<br />
            NACHARAM,<br />
            HYDERABAD,<br />
            Telangana, 500076</p>
          <p><strong>Call:</strong> +91 9100748033</p>
          <p><strong>Mail:</strong> <a href="mailto:support@paymanfintech.in">support@paymanfintech.in</a></p>
        </div>

        <div className="footer-section nav-links">
          <h4>Navigation</h4>
          <ul>
          
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section other-links">
          <h4>Other Links</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy">Refund & Cancellation Policy</Link></li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
