import React from 'react';
import './header.css';
import image from '../images/bike-riding.jpg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={image} alt="RideZoomo Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;
