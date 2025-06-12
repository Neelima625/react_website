import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./footer";
const About = () => {
  return (
    
   <>
   <Navbar></Navbar>
    <div className="about-page">
      <div className="about-hero">
        <div className="about-image">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/15/06/16/imprint-418594_640.jpg"
            alt="About Payman"
          />
        </div>

        <div className="about-text">
          <h1 className="fade-in">About Us</h1>
          <h2 className="slide-in">Work Together for Business Success</h2>
          <p className="fade-in-delay">
            When you need any financial support, we are always here for that.
            <strong> PAYMAN FINTECH SOLUTIONS PVT LTD </strong> is one of the largest,
            trusted, independent and convenient digital financial services platforms,
            leveraging sophisticated service and customer acquisition capabilities.
            It is the uninterrupted service provider in the credit card space in India
            and in the instant payment system in the country.
          </p>

          <ul className="highlights fade-in-delay">
            <li>✔ Trusted financial services partner</li>
            <li>✔ Pioneer in instant payment systems</li>
            <li>✔ Largest independent credit card facilitator</li>
            <li>✔ Robust customer acquisition capabilities</li>
            <li>✔ 24/7 uninterrupted support</li>
          </ul>

         
        </div>
      </div>
    </div>
<Footer></Footer>
   </>
  );
};

export default About;
