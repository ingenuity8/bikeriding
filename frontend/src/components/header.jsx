import React from 'react';
import './header.css';
import image from '../images/bike-riding.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu, setMenu] = useState("home")
    const handleClick = () => {
        window.location.href = 'https://youtu.be/ydkCBJVXGII?si=9PATqocqGpSXMHTB'; // Replace with your desired YouTube link
      };
    return (
        <header className="header">
            <div className="logo">
                <img src={image} alt="Saikim mobility" />
            </div>
            <nav className='navbar'>
            <ul>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}}to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("catalog")}}><Link style={{textDecoration:'none'}}to='/catalog'>Catalog</Link>{menu==="catalog"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("gallery")}}><Link style={{textDecoration:'none'}}to='/gallery'>Gallery</Link>{menu==="gallery"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}}to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("faq")}}><Link style={{textDecoration:'none'}}to='/link'>FAQ</Link>{menu==="faq"?<hr/>:<></>}</li>
            </ul>
                
            </nav>
            <div className="header-buttons">
                {/* <button className="login-btn">Login</button> */}
                <button className="signup-btn" onClick={handleClick}>Strategy Partner In India</button>
            </div>
        </header>
    );
};

export default Header;
