import React from "react";
import "./Services.css";
import Navbar from './Navbar'
import Footer from './footer'

const Services = () => {
  return (
   <> <Navbar></Navbar>
   <div className="services-page">
      <div className="services-hero">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/30/10/45/service-1013724_1280.jpg"
          alt="Services"
          className="services-image"
        />
        <div className="services-text">
          <h1>Services</h1>
          <h2>Bill Payments</h2>
          <p className="tagline">Bill Payments made simple and easy</p>
          <p>
            Utility Bill Payments being a day-to-day requirement, a <strong>PAYMAN</strong> retailer can provide utility bill payment services of all the operators in India to their customers without any hassles.
          </p>
          <p>
            Customers can just walk in and get their electricity, water, gas, etc. bills paid easily in a secure way using the services provided at a <strong>PAYMAN</strong> retail store. While PAYMAN retailers get to provide their customers with more services, they also earn extra income by rendering these services.
          </p>
        </div>
      </div>
    <Footer></Footer></div>
    </>
  );
};

export default Services;
