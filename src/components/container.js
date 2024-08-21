import React from 'react';
import '../css_pages/container.css';
import githubIcon from '../assets/skill-github.svg';
import instagramIcon from '../assets/skill-instagram.svg';
import linkedinIcon from '../assets/skill-linkedin.svg';
import gmailIcon from '../assets/skill-gmail.svg';
import headshot from '../assets/headshot.jpg';

const Container = () => {

    return (
    <div className="content-personal-info">
      <div className='main-content'>
        <header className="header">
          <div className="header-text">
            <h1>Alex Sorescu</h1>
            <div className="info">
              <p>
                <img 
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=17&pause=1000&color=154360&center=true&vCenter=true&width=300&height=17&lines=Student+Researcher;Computational+Biology;AI/ML+Developer;;" 
                  alt="Typing SVG" 
                />
              </p>
              <div className="location-container">
                <span className="location">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-map-pin"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.42 7 13 7 13s7-8.58 7-13c0-3.87-3.13-7-7-7z"></path>
                    <circle cx="12" cy="9" r="3"></circle>
                  </svg>
                  {"Aurora, Illinois, United States"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <footer className="print">
          asorescu@imsa.edu • GitHub: asor-1
        </footer>
        <footer className="no-print">
          <a href="mailto:asorescu@imsa.edu" title="Email Alex" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} className='footer-icon' alt='Gmail Icon'/>
          </a>
          <a href="https://linkedin.com/in/aidanandrewss" title="Visit Alex's LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} className='footer-icon' alt='LinkedIn Icon'/>
          </a>
          <a href="https://github.com/asor-1" title="Visit Alex's GitHub" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} className='footer-icon' alt='GitHub Icon'/>
          </a>
          <a href="https://instagram.com/asor-1" title="Visit Alex's Instagram" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} className='footer-icon' alt='Instagram Icon'/>
          </a>
        </footer>
        </div>
                <div className="headshot">
                    <img src={headshot} alt="Alex Sorescu" />
                </div>
      </div>
    );
};

export default Container;