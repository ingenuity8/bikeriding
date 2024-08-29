import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src="logo.png" alt="Zoomo Logo" />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Directory</h3>
                        <ul>
                            <li><a href="#myzoomo">MyZoomo App</a></li>
                            <li><a href="#buy-a-zoomo">Buy a Zoomo</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            <li><a href="#report-a-theft">Report a Theft</a></li>
                            <li><a href="#doordash">Doordash</a></li>
                            <li><a href="#uber-eats">Uber Eats</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#help-center">Help Center</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#partnerships">Partnerships</a></li>
                            <li><a href="#locations">Locations</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#media">Media</a></li>
                            <li><a href="#security">Security</a></li>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                            <li><a href="#privacy-faqs">Privacy FAQs</a></li>
                            <li><a href="#terms">Terms</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#linkedin">LinkedIn</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <img src="australia-flag.png" alt="AU" className="flag-icon" />
                    <span className="country-code">AU</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
