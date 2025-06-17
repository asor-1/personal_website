import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css_pages/navbar.css'; // We'll create the new CSS file next

// --- SVG Icon Components ---
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const AboutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const ProjectsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const InterestsIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.02 1.25 4.38 3.5 6.45.22.2.45.4.7.6.25.2.5.4.75.55.25.15.5.3.75.4.25.1.5.15.75.15s.5-.05.75-.15c.25-.1.5-.25.75-.4.25-.15.5-.3.75-.55.25-.2.5-.4.75-.6C17.75 13.38 19 11.02 19 9a7 7 0 0 0-7-7z"></path><path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg>
);


const Navbar = () => {
    const location = useLocation();

    // The links for the new navbar
    const navLinks = [
        { to: "/", label: "Home", icon: <HomeIcon /> },
        { to: "/about", label: "About", icon: <AboutIcon /> },
        { to: "/projects", label: "Projects", icon: <ProjectsIcon /> },
        { to: "/interest", label: "Interests", icon: <InterestsIcon /> }
    ];

    return (
        <nav className="vertical-navbar">
            <ul>
                {navLinks.map(link => (
                    <li key={link.to}>
                        <Link to={link.to} className={location.pathname === link.to ? 'active' : ''}>
                            {link.icon}
                            <span className="tooltip">{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
