import React from 'react';
import './HowItWorks.css';
// import bicycle from '../images/bicycle.jpg'

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <h2>How It Works</h2>
            <div className="work-steps">
                <div className="work-step">
                    {/* <img src="step1.png" alt="Step 1" /> */}
                    <h3>Choose Your Bike</h3>
                    <p>Select the perfect bike for your needs.</p>
                </div>
                <div className="work-step">
                    {/* <img src="step2.png" alt="Step 2" /> */}
                    <h3>Book Online</h3>
                    <p>Reserve your bike in just a few clicks.</p>
                </div>
                <div className="work-step">
                    {/* <img src="step3.png" alt="Step 3" /> */}
                    <h3>Ride & Enjoy</h3>
                    <p>Pick up your bike and start riding!</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
