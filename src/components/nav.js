import React from 'react';
import { Link } from 'react-router-dom';
import '../css_pages/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/interest">Interests</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
