import React from 'react';
import './Navbar.css';
import auraIcon from '../assets/NavbarIcon.svg';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            {/* <div className="main-navbar-content"> */}
                <img src={auraIcon} alt="AstroAura Logo" className="logo" />
                <span className="brand-name">AstroAura</span>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;
