import React, { useEffect } from 'react';
import './HowItWorks.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import bicycle from '../images/bicycle.jpg'

const HowItWorks = () => {
    useEffect(()=> {
        Aos.init();
    },[])
    return (
        <>

        <section className="how-it-works" id="how-it-works">
            
            <div className="work-steps" data-aos = "fade-right" data-aos-duration="1000">
                <div className="work-step"  >
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
        </>
    );
};

export default HowItWorks;
