import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css_pages/navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
                <li><Link to="/notes" className={location.pathname === "/notes" ? "active" : ""}>Notes</Link></li>
                <li><Link to="/interest" className={location.pathname === "/interest" ? "active" : ""}>Interests</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
