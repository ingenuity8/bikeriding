import React from 'react';
import './LocationApp.css';
import location from '../images/location-app.webp';
import google from '../images/googleplay.svg';
import apple from '../images/applestore.svg';

const locationApp = () => {
    return (
        <section className="myzoomo-app">
            <div className="content-wrapper">
                <div className="left-section">
                    <h2>Discover the</h2>
                    <h1>Saikim Mobility App</h1>
                    <div className="app-icons">
                        <div className="app-store">
                            <img src={google} alt="Get it on Google Play" />
                        </div>
                        <div className="app-store">
                            <img src={apple} alt="Download on the App Store" />
                        </div>
                    </div>
                </div>

                <div className="middle-section">
                    <img src={location} alt="MyZoomo App on Phone" />
                </div>

                <div className="right-section">
                    <ul>
                        <li><i className="icon"></i>Track your Bike Location<br /><span>via GPS at any time</span></li>
                        <li><i className="icon"></i>Remotely lock your<br /><span>bike in case of theft</span></li>
                        <li><i className="icon"></i>Chat with our<br /><span>customer service</span></li>
                        <li><i className="icon"></i>Book an appointment<br /><span>to visit us in store</span></li>
                        <li><i className="icon"></i>Refer a friend<br /><span>& earn credits</span></li>
                        <li><i className="icon"></i>Manage your<br /><span>billing & invoices</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default locationApp;
