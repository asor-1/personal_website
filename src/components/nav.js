import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css_pages/navbar.css';

// Existing icons...
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

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6H2V6h10L22 10z"></path><path d="M6 14h2"></path><path d="M12 14h2"></path>
    </svg>
);

const ExperienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
);

const SkillsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 19H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"></path><path d="M10 10l-4 4L10 18"></path><path d="M14 6l4 4L14 14"></path>
    </svg>
);


const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { to: "/", label: "About", icon: <AboutIcon /> },

        ...(location.pathname === "/" ? [
            // FIX: Pointed hash links to "/"
            { to: "/#education-section", label: "Education", icon: <EducationIcon /> },
            { to: "/#experience-section", label: "Experience", icon: <ExperienceIcon /> },
            { to: "/#projects-section", label: "Projects", icon: <ProjectsIcon /> },
            { to: "/#tech-stack-section", label: "Skills", icon: <SkillsIcon /> },
        ] : [])
    ];

    return (
        <nav className="vertical-navbar">
            <ul>
                {navLinks.map(link => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            className={
                                (link.to === "/" && location.pathname === "/" && !location.hash) ||
                                    (location.pathname === link.to) ||
                                    (location.hash && location.pathname + location.hash === link.to)
                                    ? 'active' : ''
                            }
                        >
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
