import React,{ useEffect } from 'react';
import './hero2.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
// import image1 from '../images/biking1.avif';
// import battery from '../images/battery.png';

const Hero2 = () => {
  useEffect(()=> {
    Aos.init();
},[])
  return (
    <div className="hero2-container">
      {/* Top Section: Bike Info */}
      {/* <div className="bike-info">
        <div className="bike-description"> */}
          {/* <h2>Specifically designed for delivery</h2>
          <p>Battery 17 Ah</p> */}
          {/* <div class="image-container">
           <img src={image1} alt="" class="image"/>
           <div class="overlay-text">
            <h2>Specifically designed for delivery</h2>
           <p>Battery 17 Ah</p>
           </div>
           </div>
          
        </div>
        <div className="battery-images">
          <img src={battery} alt="Battery close-up" className="battery-img" />
          <div class="overlay-text-2">
             <p>Upto 9 hrs charge</p>
            <h2>17Ah Battery</h2>

           </div>
        </div>
      </div> */}

      {/* Rent-to-Own Section */}
      {/* <div className="rent-to-own">
            <h3>Rent-to-Own</h3>
            <p>
            Ride on the path to owning an e-bike, <br />with a down payment of $150 and 20 weekly payments of $93.
            </p>
            </div>
          <div className="rent-details">
          <div className="down-payment">
            <span>Down Payment</span>
            <h4>$150</h4>
      
      </div>
          <div className="weekly-payment">
            <span>Weekly Payments</span>
            <h4>$93</h4>
            <p>20 weekly payments of $93</p>
          </div>
        <button className="learn-more-btn">Learn More</button>
       </div> */}

      {/* What's Included Section */}
      {/* <div className="whats-included">
        <h4>What's Included</h4>
        <div className="icons">
          <div className="icon-item">
            <i className="icon-bike" />
            <p>E-bike</p>
          </div>
          <div className="icon-item">
            <i className="icon-key" />
            <p>Lock</p>
          </div>
          <div className="icon-item">
            <i className="icon-charge" />
            <p>Charger</p>
          </div>
        </div>
      </div> */}

      {/* Getting Started Section */}
      <div className="getting-started">
        <h1>Getting Started</h1>
        <div className="steps" >
          <div className="step" data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <h4>1. Make a booking</h4>
            <p>Reserve a bike online with a down payment.</p>
            <ol>
                <li>Bring a valid government-issued photo identification</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
            </ol>
          </div>
          <div className="step" data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <h4>2. Pick up your bike</h4>
            <p>Visit the store to collect your bike.</p>
            <ol>
                <li>Bring a valid government-issued photo identification</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
            </ol>
          </div>
          <div className="step" data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <h4>3. Start riding</h4>
            <p>Begin your e-bike journey on the day of pickup.</p>
            <ol>
                <li>Bring a valid government-issued photo identification</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
            </ol>
          </div>
          <div className="step" data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <h4>4. Need help?</h4>
            <p>We're here for support and maintenance.</p>
            <ol>
                <li>Bring a valid government-issued photo identification</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
                <li>Proof of address</li>
                <li>Your debit or credit card for payment</li>
            </ol>
          </div>
        </div>
        <button className="make-booking-btn">Make a Booking</button>
      </div>
    </div>
  );
};

export default Hero2;
