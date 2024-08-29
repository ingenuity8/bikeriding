import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <h2>Pricing Plans</h2>
            <div className="pricing-plans">
                <div className="plan">
                    <h3>Daily</h3>
                    <p>$10/day</p>
                    <button>Select Plan</button>
                </div>
                <div className="plan">
                    <h3>Weekly</h3>
                    <p>$50/week</p>
                    <button>Select Plan</button>
                </div>
                <div className="plan">
                    <h3>Monthly</h3>
                    <p>$150/month</p>
                    <button>Select Plan</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
