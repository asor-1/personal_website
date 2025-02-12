import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css_pages/Projects.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from '../components/nav';
import Container from '../components/container';
import infoIcon from '../assets/microscope.svg'; // Import your info SVG
// Import SVGs directly to test if the issue is with the public folder
import bacteria1 from '../assets/bacteria1.svg';
import bacteria2 from '../assets/bacteria2.svg';
import bacteria3 from '../assets/bacteria3.svg';
import bacteria4 from '../assets/bacteria4.svg';
import Hexagon from '../components/hexagons';

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
  const [showInfoContainer, setShowInfoContainer] = useState(false);

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
    const dishSize = Math.min(window.innerWidth * 0.5, 400) - DISH_PADDING * 2; // Reduced dish size
    const centerX = dishSize / 2;
    const centerY = dishSize / 2;
    const radius = (dishSize / 2) - (BACTERIA_SIZE / 2) - DISH_PADDING;

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

  const customTheme = {
    ...oneLight,
    'code[class*="language-"]': {
      ...oneLight['code[class*="language-"]'],
      font: 'Arial',
    },
  };

  const toggleInfoContainer = () => {
    setShowInfoContainer(!showInfoContainer);
  };

  return (
    <div className="home-container">
      <Hexagon />
      <Container />
      <Navbar />
      <div className='about-projects'>
        <h3 className='about-header'>Alex's Projects...</h3>
        <p>
          This is my projects section. Once you scroll down to the petri dish and press the bacteria, the projects will pop up.
          Reload the page to see the bacteria in different positions.
        </p>
      </div>
      <div className="projects-container">
        <div className='petri-dish-name'>
          <h2>Alex's Petri Dish</h2>
        </div>
        <div className="petri-dish-wrapper">
          <div className="petri-dish">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bacteria"
                style={{
                  left: `${bacteriaPositions[index]?.x}px`,
                  top: `${bacteriaPositions[index]?.y}px`,
                }}
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.svgPath} alt={`Bacteria for ${project.name}`} />
                <div className="tooltip">{project.name}</div>
              </div>
            ))}
          </div>
          <div className="info-section">
            <div 
              className={`info-icon ${showInfoContainer ? 'active' : ''}`} 
              onClick={toggleInfoContainer}
            >
              <img src={infoIcon} alt="Info Icon" />
            </div>
            {showInfoContainer && (
              <div className="info-container">
                <h3>Welcome to Alex's Petri Dish!</h3>
                <p>Even though I am interested in computational biology, I have never once picked up a pipette in wet lab. </p>
                <button onClick={toggleInfoContainer}>Close</button>
              </div>
            )}
          </div>
        </div>
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