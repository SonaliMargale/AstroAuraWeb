import React from 'react';
import './Navbar.css';
import auraIcon from '../assets/navbar logo.png';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div className="main-navbar-content">
                <img src={auraIcon} alt="AstroAura Logo" className="logo" />
                <h1 className="brand-name">AstroAura</h1>
            </div>
        </nav>
    );
};

export default Navbar;
