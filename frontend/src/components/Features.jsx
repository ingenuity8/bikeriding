import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <div className="feature-item">
                <img src="feature1.png" alt="Feature 1" />
                <h3>Flexible Rentals</h3>
                <p>Choose a plan that suits your needs.</p>
            </div>
            <div className="feature-item">
                <img src="feature2.png" alt="Feature 2" />
                <h3>Best Quality</h3>
                <p>High-quality e-bikes for a smooth ride.</p>
            </div>
            <div className="feature-item">
                <img src="feature3.png" alt="Feature 3" />
                <h3>Affordable Pricing</h3>
                <p>Get the best value for your money.</p>
            </div>
        </section>
    );
};

export default Features;
