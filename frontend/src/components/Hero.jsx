import React from 'react';
import './Hero.css';
import './Features2.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Hero Content */}
            <div className="hero-content">
                <h1>Find Your Perfect Electric Bike</h1>
                <p>Ride with confidence and convenience. Discover the best e-bikes for you.</p>
                <button className="cta-btn">Explore Our Bikes</button>
            </div>

            {/* Features Cards */}
            <div className="features-cards">
                <div className="card boost">
                    <div className="card-header">
                        <h3>Boost</h3>
                        <span className="most-popular">Most Popular</span>
                    </div>
                    <div className="card-body">
                        <h2>$64<span>/Week</span></h2>
                        <p>$0 deposit*</p>
                        <p>Minimum</p>
                        <h4>8 weeks</h4>
                    </div>
                    <div className="card-footer">
                        <button>BOOK NOW</button>
                    </div>
                </div>

                <div className="card pro">
                    <div className="card-header">
                        <h3>Pro</h3>
                    </div>
                    <div className="card-body">
                        <h2>$74<span>/Week</span></h2>
                        <p>$0 deposit*</p>
                        <p>Minimum</p>
                        <h4>4 weeks</h4>
                    </div>
                    <div className="card-footer">
                        <button>BOOK NOW</button>
                    </div>
                </div>

                <div className="card flex">
                    <div className="card-header">
                        <h3>Flex</h3>
                    </div>
                    <div className="card-body">
                        <h2>$84<span>/Week</span></h2>
                        <p>$0 deposit*</p>
                        <p>Minimum</p>
                        <h4>1 week</h4>
                    </div>
                    <div className="card-footer">
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </div>

            {/* Add-ons and Plans Section */}
            <div className="addons-plans-section">
                <div className="addons-column">
                    <h2>Available Add-ons in Store</h2>
                    <div className="addon-item">
                        <h3>Theft Coverage</h3>
                        <p>Opt in for Theft Cover to drop your <span className="highlight">*deposit from $150 to $0</span></p>
                        <p>Decrease your liability in case of theft</p>
                    </div>
                    <div className="addon-item">
                        <h3>Extra Battery</h3>
                        <p>Allow you to ride up to 16H per day</p>
                    </div>
                </div>
                <div className="plans-column">
                    <h2>All of our plans include</h2>
                    <div className="plan-icons">
                        <div className="plan-item">
                            <i className="icon-bike"></i>
                            <p>E-Bike</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-battery"></i>
                            <p>Battery 17Ah, up to 9 hours</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-maintenance"></i>
                            <p>Maintenance Service</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-app"></i>
                            <p>Access to Zoomo App</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-km"></i>
                            <p>Unlimited KM</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-lock"></i>
                            <p>Lock</p>
                        </div>
                        <div className="plan-item">
                            <i className="icon-gps"></i>
                            <p>GPS Tracking</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
