import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import './Home.css';
import Footer1 from './Footer1'
import Footer from './footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      

      {/* Section 1: Image Left, Text Right */}
      <div className="section">
        <div className="section-image">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFWVqh49fnZ3w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1739218493571?e=2147483647&v=beta&t=Zi4e5FGgUET7nCBKMuxdmWjBq2dM6FQcVkx5nR2oWtY"
            alt="Financial Support"
          />
        </div>
        <div className="section-content">
          <h2>Your Financial Partner</h2>
          <p>
            When you need any financial support, we are always here for you.
          </p>
          <ul>
            <li>One of the best fintech platforms.</li>
            <li>Trusted, independent, and convenient services.</li>
            <li>Seamless digital financial solutions for everyone.</li>
            <li>Reliable credit card and instant payment support.</li>
          </ul>
        </div>
      </div>

      
      <div className="section reverse">
       
        <div className="section-image">
          <img
            src="https://img.freepik.com/premium-photo/shopping-phone-credit-card-woman-ecommerce-travel-payment-sale-discount-person-with-smile-designer-fashion-retail-promotion-paper-bag-online-fintech-banking-app_590464-146498.jpg"
            alt="Trusted Fintech"
          />
        </div>
         <div className="section-content">
          <h2>Why PAYMAN?</h2>
          <p>
            PAYMAN FINTECH SOLUTIONS PVT LTD leads the way in digital finance.
          </p>
          <ul>
            <li>Advanced customer acquisition capabilities.</li>
            <li>Uninterrupted service in credit and payments.</li>
            <li>Pan-India presence in digital banking tools.</li>
            <li>Trusted by thousands across the nation.</li>
          </ul>
        </div>
       
      </div>
       <div className='section2'>
          <div className='cards'>
            <img src='https://paymanfintech.in/images/commition%20199x%20199.png'></img>
           <div>
            <h3>BEST COMMISSION</h3>
            <p>Best Commission in Electricity Bill Payment 1% Margin</p></div>
          </div>
        <div className='cards'>
            <img src='https://paymanfintech.in/images/helpe199x199.png'></img>
            <div><h3>BEST SUPPORT</h3>
            <p>24X7 Whatsapp & Chat Support Available</p></div>
          </div>
        <div className='cards'>
            <img src='https://paymanfintech.in/images/speed%20199x199.png'></img>
            <div><h3>SUPER FAST</h3>
            <p>Smart Pay Provides Super Fast Service with Highest Succes Ratio</p></div>
            
          </div>
        <div className='cards'>
            <img src='https://paymanfintech.in/images/trust%20199x199.png'></img>
            <div><h3>TRUSTED</h3>
            <p>Smart Pay is 100% Trustable With the Mutual Cooperation & Transparency</p></div>
          </div>
          </div>
      <div className='section3'>
        <h2>Our Services</h2>
        <p>At <b>PAYMAN</b>, we give not just the Best but Legendary satisfaction to our
Customers, through Service Excellence</p>
        <div className='section3_cards'>
          <img src='https://paymanfintech.in/images/lpg%20gas%2080x80.jpg'></img>
          <h3>Gas Bill</h3>
        </div>
        <div className='section3_cards'>
          <img src='https://paymanfintech.in/images/postepaied%2080x80.png'></img>
          <h3>Postpaid Bill</h3>
        </div>
        <div className='section3_cards'>
           <img src='https://paymanfintech.in/images/elatricity%2080x80.png'></img>
          <h3>Electricity</h3>
        </div>
        <div className='section3_cards'>
           <img src='https://paymanfintech.in/images/water_bill.jpg'></img>
          <h3>Water Bill</h3>
        </div>

      </div>
      <div className="section4">
  <h2>Accepted Payment Methods</h2>
  <p>We support a wide range of secure and trusted payment options</p>
  <div className="payment-logos">
    <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="Visa" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9m7_DCfLoOG5a2ZefzFtoLO2O--_sdx3NqR8-LvxOPvGZF-iHeKTPWINWBwoP6Y_KZw&usqp=CAU" alt="RuPay" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" alt="MasterCard" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hxPnrIqheqOyPHcfEPsAqwGfNCTp6chjxQ&s" alt="Other" />
    <img src='https://images.seeklogo.com/logo-png/45/2/american-express-logo-png_seeklogo-453638.png'></img>
  </div>
</div>

      <Footer1></Footer1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
