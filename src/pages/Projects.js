import React, { useState, useContext } from 'react';
import '../css_pages/Projects.css';
import { ThemeContext } from '../context/themeContext';
import Navbar from '../components/nav';
import PersonalInfoCard from '../components/container';

const Project = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);


    return (
        <div className={`home-container ${theme}`}>
            <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <PersonalInfoCard />
            </div>
            <Navbar />
            <div className='section-header'>
                <h2 className='education-header'>Projects...</h2>
            </div>
        </div>
    );
};

export default Project;