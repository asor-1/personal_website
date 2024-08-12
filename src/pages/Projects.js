import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css_pages/Projects.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import headshot from '../assets/headshot.jpg';
import Navbar from '../components/nav';
import githubIcon from '../assets/skill-github.svg';
import instagramIcon from '../assets/skill-instagram.svg';
import linkedinIcon from '../assets/skill-linkedin.svg';
import gmailIcon from '../assets/skill-gmail.svg';
import infoIcon from '../assets/microscope.svg'; // Import your info SVG
// Import SVGs directly to test if the issue is with the public folder
import bacteria1 from '../assets/bacteria1.svg';
import bacteria2 from '../assets/bacteria2.svg';
import bacteria3 from '../assets/bacteria3.svg';
import bacteria4 from '../assets/bacteria4.svg';

import track from '../markdown/project1.md'
import graphRAG from '../markdown/graphRag.md'
import assist from '../markdown/project1.md'
import ucell from '../markdown/project1.md'

const projects = [
  { id: 1, name: 'Track Segments', svgPath: bacteria1, markdownPath: track, demoLink: 'https://github.com/asor-1/Tracking-Single-Cell-Segmentations' },
  { id: 2, name: 'OpenMind Website', svgPath: bacteria2, markdownPath: '/markdown/project2.md', demoLink: '#' },
  { id: 3, name: 'GraphRag Revised', svgPath: bacteria3, markdownPath: graphRAG, demoLink: '#' },
  { id: 4, name: 'Assistance RAG', svgPath: bacteria4, markdownPath: assist, demoLink: '#' },
  { id: 4, name: 'UCellSeg', svgPath: bacteria1, markdownPath: ucell, demoLink: '#' },
];

//These units are in pixels
const BACTERIA_SIZE = 60;
const DISH_PADDING = 20;
const MIN_DISTANCE = 90;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [bacteriaPositions, setBacteriaPositions] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [infoMessage, setInfoMessage] = useState(''); // State for info message

  const isValidPosition = useCallback((newPos, existingPositions) => {
    for (const pos of existingPositions) {
      const distance = Math.sqrt(
        Math.pow(newPos.x - pos.x, 2) + Math.pow(newPos.y - pos.y, 2)
      );
      if (distance < MIN_DISTANCE) {
        return false;
      }
    }
    return true;
  }, []);

  

  const generateBacteriaPositions = useCallback(() => {
    const positions = [];
    const dishSize = Math.min(window.innerWidth * 0.8, 600) - DISH_PADDING * 2;
    const centerX = dishSize / 2;
    const centerY = dishSize / 2;
    const radius = dishSize / 2 - BACTERIA_SIZE / 2 - DISH_PADDING;

    for (let i = 0; i < projects.length; i++) {
      let newPosition;
      let attempts = 0;
      const maxAttempts = 100;

      do {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random()) * radius;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle);

        newPosition = { x, y };
        attempts++;

        if (attempts >= maxAttempts) {
          console.warn('Could not find a suitable position for all bacteria');
          break;
        }
      } while (!isValidPosition(newPosition, positions));

      positions.push(newPosition);
    }

    return positions;
  }, [isValidPosition]);

  useEffect(() => {
    const positions = generateBacteriaPositions();
    setBacteriaPositions(positions);
  }, [generateBacteriaPositions]);

  const handleProjectClick = async (project) => {
    setSelectedProject(project);
    try {
      const response = await fetch(project.markdownPath);
      if (!response.ok) {
        throw new Error('Failed to fetch markdown');
      }
      const text = await response.text();
      setMarkdownContent(text);
    } catch (error) {
      console.error('Error loading markdown:', error);
      setMarkdownContent('Failed to load project description.');
    }
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setMarkdownContent('');
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };
  const customTheme = {
    ...oneLight,
    'code[class*="language-"]': {
      ...oneLight['code[class*="language-"]'],
      font: 'Arial',
    },
  };

  const showInfoMessage = (message) => {
    setInfoMessage(message);
    setTimeout(() => setInfoMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="home-container">
      <div className="content">
      <div className='main-content'>
        <header className="header">
          {showMap && (
            <div className="map-overlay">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95250.86932393022!2d-88.38929098085609!3d41.750942791327915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee54d4ed5111b%3A0x7fd1f848c350e85d!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1722031888377!5m2!1sen!2sus"
                title="Map of Aurora, IL"
              ></iframe>
              <button onClick={toggleMap} className="close-map">Close Map</button>
            </div>
          )}
          <div className="header-text">
            <h1>Alex Sorescu</h1>
            <div className="info">
              <p>
                <img 
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=17&pause=1000&color=556B76FF&center=true&vCenter=true&width=300&height=17&lines=Student+Researcher;Computational+Biology;AI/ML+Developer;;" 
                  alt="Typing SVG" 
                />
              </p>
              <div className="location-container">
                <span className="location" onClick={toggleMap}>
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
                  {!showMap && "Aurora, Illinois, United States"}
                </span>
              </div>
            </div>
          </div>
        </header>
        <footer className="print">
          asorescu@imsa.edu • GitHub: asor-1
        </footer>
        <footer className="no-print">
          <a 
            href="mailto:asorescu@imsa.edu" 
            title="Email Alex" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src ={gmailIcon} className='footer-icon' alt='Gmail Icon'/>
          </a>
          <a 
            href="https://linkedin.com/in/aidanandrewss" 
            title="Visit Alex's LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src ={linkedinIcon} className='footer-icon' alt='Linkedin Icon'/>
          </a>
          <a 
            href="https://github.com/asor-1" 
            title="GitHub" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src ={githubIcon} className='footer-icon' alt='Github Icon'/>
          </a>
          <a 
            href="https://www.instagram.com/a.lsor1/" 
            title="Instagram" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src ={instagramIcon} className='footer-icon' alt='Instagram Icon'/>
          </a>
        </footer>
        </div>
        <div className="headshot">
            <img 
              src={headshot} 
              alt="Alex Sorescu" 
            />
          </div>
      </div>
      <Navbar />
      <div className='about-projects'>
        <h3 className='about-header'>Alex's Projects...</h3>
            <p>
            This is my projects section. Once you scroll down to the petri dish and press the bacteria the projects will pop up.
            Reload the page to see the bacteria in different positions.
          </p>
      </div>
      <div className="projects-container">
        <div className='petri-dish-name'>
          <h2>Alex's Petri Dish</h2>
        </div>
        <div className="petri-dish">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bacteria"
              style={{
                left: bacteriaPositions[index]?.x - BACTERIA_SIZE / 2,
                top: bacteriaPositions[index]?.y - BACTERIA_SIZE / 2,
                cursor: 'pointer',
              }}
              onClick={() => handleProjectClick(project)}
            >
              <img src={project.svgPath} alt={`Bacteria for ${project.name}`} />
              <div className="tooltip">{project.name}</div>
            </div>
          ))}
        </div>
        <div className="info-icon" onClick={() => showInfoMessage('Your message here')}>
          <img src={infoIcon} alt="Info Icon" />
        </div>
        {infoMessage && <div className="info-message">{infoMessage}</div>}
      </div>
      {selectedProject && (
        <div className="project-details">
          <h2>{selectedProject.name}</h2>
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      className="custom-code-block"
                      style={oneLight}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
          <div className="button-container">
            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">
              View Demo
            </a>
            <button onClick={closeProjectDetails} className="close-button">X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;