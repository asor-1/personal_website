import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css_pages/navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                setIsSticky(window.scrollY > navbar.offsetTop + navbar.offsetHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
                </li>
                <li>
                    <Link to="/notes" className={location.pathname === '/notes' ? 'active' : ''}>Notes</Link>
                </li>
                <li>
                    <Link to="/interest" className={location.pathname === '/interest' ? 'active' : ''}>Interests</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
