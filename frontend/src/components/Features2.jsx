import React from 'react';
import './Features2.css'; // Assuming you have a CSS file for styling

const Features2 = () => {
  return (
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
  );
};

export default Features2;
