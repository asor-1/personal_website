import React, { useState, useContext } from 'react';
import '../css_pages/Home.css';
import { ThemeContext } from '../context/themeContext';
import ThemeToggle from '../components/themeToggle';
import headshot from '../assets/headshot.jpg';
import resume from '../assets/alexs_resume.pdf';
import Navbar from '../components/nav';
import machineLearningIcon from '../assets/skill-pytorch.svg';
import skillpython from '../assets/skill-python.svg';
import skillflask from '../assets/skill-flask.svg';
import skillaws from '../assets/skill-aws.svg';
import skillreact from '../assets/skill-react.svg';
import skillr from '../assets/skill-r.svg';
import githubIcon from '../assets/skill-github.svg';
import instagramIcon from '../assets/skill-instagram.svg';
import linkedinIcon from '../assets/skill-linkedin.svg';
import gmailIcon from '../assets/skill-gmail.svg';
import skilljava from '../assets/skill-java.svg';
import skillscikit from '../assets/skill-scikit.svg';
import skilltensorflow from '../assets/skill-tensorflow.svg';
import skillgcp from '../assets/skill-gcp.svg';


const Home = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <div className={`home-container ${theme}`}>
            <div className={`content ${theme}`}>
            <div className="main-content">
                <header className="header">
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

                {showMap && (
                <div className="map-container">
                    <div className="map-overlay">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95250.86932393022!2d-88.38929098085609!3d41.750942791327915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee54d4ed5111b%3A0x7fd1f848c350e85d!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1722031888377!5m2!1sen!2sus"
                            title="Map of Aurora, IL"
                        ></iframe>
                        <button onClick={toggleMap} className="close-map">Close Map</button>
                    </div>
                </div>
            )}
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
                    <img src={headshot} alt="Alex Sorescu" />
                </div>
            </div>
            <Navbar />
            <div className={`about-section ${theme}`}>
                <h2 className='about-header'>About Alex...</h2>
                <p>
                Hi there, 
                <br></br><br></br>I am a dedicated and attentive ML developer with an interest in computational biology. As a current student and a researcher focused on machine learning applications in biology, I am deeply committed to using technology to solve complex problems. 
                My academic and recreational projects are where I apply my knowledge. I spend most of my time researching, learning, and playing pickleball. 
                However, when I am not working I am the biggest supporter of the Tottenham Hotspurs.

                </p>
            </div>

            <div className={`resume-section ${theme}`}>
                <h2 className='resume-header'>Alex's Resume...</h2>
                <div className='pdf-buttons'>
                    <a href={resume} download className='pdf-button-download-button'>Download PDF</a>
                    <button onClick={() => setShowPdf(true)} className='pdf-button-view-button'>View PDF</button>
                </div>
                {showPdf && (
                    <div className='pdf-viewer'>
                        <iframe src={resume} title="Resume PDF Viewer" />
                        <button onClick={() => setShowPdf(false)} className='pdf-button-view-button'>Close</button>
                    </div>
                )}
            </div>

            <div className={`education-section ${theme}`}>
                <h2 className='education-header'>Education...</h2>
                <h4>
                    Illinois Mathematics and Science Academy
                </h4>
                <p className='date'>August 2022 - June 2025</p>
                <p>
                    High School Degree<br></br>
                    - Planning to continue my education in university. With the intention of pursuing a degree in Computer Science and Biology. 
                </p>
            </div>
            <div className='education-classes'>
                <h2 className='education-header'>Relevant Courses...</h2>
                <div className='course-list'>
                    <div className='course-item'>
                        <span className='course-code'>CSI</span>
                        <span className='course-name'>Introduction to Computer Science (HTML/CSS & Python)</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>CS Seminar: Machine Learning</span>
                        <span className='course-name'>Intro to Machine Learning algorithms (CNN & Intent Classification)</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>OOP</span>
                        <span className='course-name'>Object-Oriented Programming (Java)</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>Modern Physics</span>
                        <span className='course-name'>Special Relativity, Quantum Mechanics/Computing, & Elementary Particle Physics</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>SI: Physics</span>
                        <span className='course-name'>Equivalent to AP physics 1</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>BC Calculus 1</span>
                        <span className='course-name'>Equivalent to calculus I</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>ABS</span>
                        <span className='course-name'>Molecular Biology</span>
                    </div>
                    </div>
            </div>

            <div className={`research-section ${theme}`}>
                <h2 className='research-header'>Relevant Research Experience...</h2>
                <div clasName='nu-research'>
                    <div className='name-role'>
                    <h4 className='place-name'>Feinberg School of Medicine, Northwestern University</h4>
                    <p className = 'role'>Lab Researcher</p>
                    </div>
                        <p className='date'>July 2023 - Present</p>
                        <p>I built an image sequencing pipeline focused on pancreatic cancer cells, utilizing Cellpose, Python, and computer vision algorithms such as contour tracing and spatial gradient analysis. This pipeline was designed to assess whether and when Sotorasib and Gemcitabine-treated cells reactivated their signaling pathways for proliferation. It was subsequently integrated with another pipeline to analyze gene expression during these signaling events, aiming to identify which genes were responsible for developing resistance.</p>
                </div>
                <div>
                <div className='name-role'>
                    <h4 className='place-name'>University of Illinois Chicago, Medical School</h4>
                    <p className = 'role'>Lab Intern</p>
                </div>
                        <p className='date'>May 2024 - Present</p>
                        <p>High School Degree, planning to continue my education in university. With the intention of pursuing a degree in Computer Science and Biology.</p>
                </div>
            </div>

            <div className={`list-skills ${theme}`}>
                <h3>List of Skills:</h3>
                <div className='skill-row'>
                <div className='skill-item'>
                    <img src ={skillpython} alt='Machine Learning Icon'/>
                    <span>Python</span>
                </div>
                <div className='skill-item'>
                    <img src ={skilljava} alt='Java Icon'/>
                    <span>Java</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillr} alt='R Icon'/>
                    <span>R</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillreact} alt='React Icon'/>
                    <span>React</span>
                </div>
                <div className='skill-item'>
                    <img src ={skilltensorflow} alt='Tensorflow Icon'/>
                    <span>Tensorflow</span>
                </div>
                </div>
                <div className='skill-row'>
                <div className='skill-item'>
                    <img src ={machineLearningIcon} alt='Pytorch Icon'/>
                    <span>Pytorch</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillscikit} alt='Scikit Icon'/>
                    <span>Scikit-learn</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillflask} alt='Flask Icon'/>
                    <span>Flask</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillaws} alt='AWS Icon'/>
                    <span>Amazon Web Services</span>
                </div>
                <div className='skill-item'>
                    <img src ={skillgcp} alt='GCP Icon'/>
                    <span>Google Cloud Production</span>
                </div>
                </div>
                    
            </div>
        </div>
    );
};

export default Home;