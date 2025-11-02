import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css_pages/about.css';
import { ThemeContext } from '../context/themeContext';
import resume from '../assets/alexs_resume.pdf';
// Navbar import removed, as it's already in App.js
import SkillsSection from '../components/skills';
import PersonalInfoCard from '../components/container';

// Renamed component to match filename and App.js import
const About = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);
    const location = useLocation();

    // Scroll to section if URL has a hash (like #education-section)
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const GpaIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gpa-icon">
            <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
            <path d="M4 11v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11"></path>
            <path d="m9 16 2 2 4-4"></path>
        </svg>
    );

    return (
        <div className={`home-container ${theme}`}>
            {/* Navbar component removed from here */}

            <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <PersonalInfoCard />
            </div>

            <div id="education-section" className='section-header'>
                <h2 className='education-header'>Education</h2>
            </div>
            <div className={`education-section ${theme}`}>
                <div className='education-item'>
                    <div className='education-logo-container'>
                        <img src={require('../assets/umd-logo.png')} alt="UMD logo" className="education-logo" />
                        <p className='date'>Expected: 2029</p>
                    </div>
                    <div className='education-details'>
                        <h4 className='place-name'>University of Maryland, College Park (UMD)</h4>
                        <p className='role'>#10 Ranked Computer Science program in the nation according to csrankings.org</p>
                        <div className='major-info'>
                            <span className="computer-icon"></span>
                            <p>B.S. in Computer Science: Machine Learning</p>
                        </div>
                        <div className='major-info'>
                            <GpaIcon />
                            <p>GPA: 4.0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-header'>
                <h2 className='resume-header'>Alex's Documents</h2>
            </div>
            <div className={`resume-section ${theme}`}>
                <div className='pdf-buttons'>
                    <a href={resume} download className='pdf-button-download-button'>Resume PDF</a>
                    <button onClick={() => setShowPdf(true)} className='pdf-button-view-button'>View Resume</button>
                </div>
                {showPdf && (
                    <div className='pdf-viewer'>
                        <iframe src={resume} title="Resume PDF Viewer" />
                        <button onClick={() => setShowPdf(false)} className='pdf-button-view-button'>Close</button>
                    </div>
                )}
            </div>

            <div id="experience-section" className={`section-header ${theme}`}>
                <h2 className='education-header'>Experience</h2>
            </div>
            {/* FIX: Grouped all experience items into ONE container for consistent width */}
            <div className={`experience-section ${theme}`}>
                {/* PSSG Experience */}
                <div className='experience-item'>
                    <div className='experience-logo-container'>
                        <img src={require('../assets/pssg.png')} alt="pssg logo" className="experience-logo" />
                        <p className='date-exp'>May 2025 - Present</p>
                    </div>
                    <div className='experience-details'>
                        <h4 className='place-name'>Parallel Software and Systems Group</h4>
                        <p className='role'>Researcher</p>
                        <div className='major-info'>
                            <span className="computer-icon"></span>
                            <p>More info soon...</p>
                        </div>
                        <p className='other-exp'>Prof. Abhinav Bhatele</p>
                    </div>
                </div>

                <hr className="experience-divider" />

                {/* Feinberg Experience */}
                <div className='experience-item'>
                    <div className='experience-logo-container'>
                        <img src={require('../assets/goyalLabLogo.jpg')} alt="goyal lab logo" className="experience-logo" />
                        <p className='date-exp'>Jan. 2023 - Present</p>
                    </div>
                    <div className='experience-details'>
                        <h4 className='place-name'>Feinberg School of Medicine, Northwestern University</h4>
                        <p className='role'>Lab Researcher | Goyal Lab</p>
                        <div className='major-info'>
                            <span className="computer-icon"></span>
                            <p>Developing a model to identify fluorescent intensity in resistant cancer cells.</p>
                        </div>
                        <div className='major-info'>
                            <p>Developing a image sequencing pipeline to predict if a colony of cancer cells will become resistance based on morphology.</p>
                        </div>
                        <div className='major-info'>
                            <p>Analyzing cell data that will be used in a research publication.</p>
                        </div>
                        <div className='major-info'>
                            <p>Research presented at the National University of Singapore and Genome Institute of Singapore (a national initiative under Singapore’s Agency for Science).</p>
                        </div>
                        <p className='other-exp'>Prof. Yogesh Goyal</p>
                    </div>
                </div>

                <hr className="experience-divider" />

                {/* UIC Experience */}
                <div className='experience-item'>
                    <div className='experience-logo-container'>
                        <img src={require('../assets/uiclogo.jpg')} alt="goyal lab logo" className="experience-logo" />
                        <p className='date-exp'>May 2024 - May 2025</p>
                    </div>
                    <div className='experience-details'>
                        <h4 className='place-name'>University of Illinois Chicago, Medical School</h4>
                        <p className='role'>Lab Intern | Ma Lab</p>
                        <div className='major-info'>
                            <span className="computer-icon"></span>
                            <p>Currently, we are testing an algorithm we built to identify pockets and cavities across multiple frames of the protein to see where pockets stay the same and where they disappear.</p>
                        </div>
                        <p className='other-exp'>Prof. Ao Ma</p>
                        <p className='other-exp'>Dr. Hui Li</p>
                    </div>
                </div>
            </div>


            {/* --- PROJECTS SECTION --- */}
            <div id="projects-section" className='section-header'>
                <h2 className='education-header'>Projects</h2>
            </div>
            <div className="projects-grid-container">
                {/* Project 1 */}
                <div className="project-card">
                    <h4>Project Title 1</h4>
                    <p>A brief description of the project, what it does, and the technologies used. Keep it to 2-3 lines.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                </div>
                {/* Project 2 */}
                <div className="project-card">
                    <h4>Project Title 2</h4>
                    <p>A brief description of the project, what it does, and the technologies used. Keep it to 2-3 lines.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                </div>
                {/* Project 3 */}
                <div className="project-card">
                    <h4>Project Title 3</h4>
                    <p>A brief description of the project, what it does, and the technologies used. Keep it to 2-3 lines.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                </div>
                {/* Project 4 (to show wrapping) */}
                <div className="project-card">
                    <h4>Project Title 4</h4>
                    <p>This project will appear on the second row, showing that the grid wraps correctly.</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                </div>
            </div>


            <div id="tech-stack-section">
                <SkillsSection />
            </div>
        </div>
    );
};

// Renamed export
export default About;

