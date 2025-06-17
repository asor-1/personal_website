import React, { useState, useContext } from 'react';
import '../css_pages/about.css';
import { ThemeContext } from '../context/themeContext';
import resume from '../assets/alexs_resume.pdf';
import Navbar from '../components/nav';
import Courses from '../components/courses';
import SkillsSection from '../components/skills';
import PersonalInfoCard from '../components/container';

const Home = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);
    // GPA Icon Component
    const GpaIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gpa-icon">
            <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
            <path d="M4 11v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11"></path>
            <path d="m9 16 2 2 4-4"></path>
        </svg>
    );


    return (
        <div className={`home-container ${theme}`}>
            <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <PersonalInfoCard />
            </div>
            <Navbar />
            <div className={`education-section ${theme}`}>
                <h2 className='education-header'>Education...</h2>
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
                            <p>GPA: 4.0 (for example)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`resume-section ${theme}`}>
                <h1 className='resume-header'>Alex's Resume...(Not up-to-date)</h1>
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


            <div className={`research-section ${theme}`}>
                <h2 className='research-header'>Relevant Work Experience...</h2>
                <div className='nu-research'>
                    <div className='research-content'>
                        <div className='name-role'>
                            <h4 className='place-name'>OpenMind</h4>
                            <p className='role'>Co-founder/CTO</p>
                        </div>
                        <p className='date'>Dec. 2022 - Jan. 2025</p>
                        <p> More info soon... </p>
                    </div>
                    <img src={require('../assets/pssg.png')} alt="PSSG Logo" className="research-logo" />
                </div>
            </div>
            
            <div className={`research-section ${theme}`}>
                <h2 className='research-header'>Relevant Research Experience...(NOT up-to-date)</h2>
                <div className='nu-research'>
                    <div className='research-content'>
                        <div className='name-role'>
                            <h4 className='place-name'>Parallel Software and Systems Group - UMD</h4>
                            <p className='role'>Lab Researcher</p>
                        </div>
                        <p className='date'>May 2025 - Present</p>
                        <p> More info soon... </p>
                    </div>
                    <img src={require('../assets/pssg.png')} alt="PSSG Logo" className="research-logo" />
                </div>

                <div className='nu-research'>
                    <div className='research-content'>
                        <div className='name-role'>
                            <h4 className='place-name'>Feinberg School of Medicine, Northwestern University</h4>
                            <p className='role'>Lab Researcher</p>
                        </div>
                        <p className='date'>Janurary 2023 - Present</p>
                        <p>
                            My biggest time commitment during high school has been as a lab researcher at the Feinberg School of Medicine. 
                            Below are some technical highlights of my work:
                        </p>
                        <ul>
                            <li>Developing a model to identify fluorescent intensity in resistant cancer cells.</li>
                            <li>Developing a image sequencing pipeline to predict if a colony of cancer cells will become resistance based on morphology.</li>
                            <li>Analyzing cell data that will be used in a research publication.</li>
                            <li>Research presented at the National University of Singapore and Genome Institute of Singapore (a national initiative under Singapore’s Agency for Science).</li>
                        </ul>
                    </div>
                    <img src={require('../assets/goyalLabLogo.jpg')} alt="Feinberg School of Medicine Logo" className="research-logo" />
                </div>


                <div className='nu-research'>
                    <div className='research-content'>
                        <div className='name-role'>
                            <h4 className='place-name'>University of Illinois Chicago, Medical School</h4>
                            <p className='role'>Lab Intern</p>
                        </div>
                        <p className='date'>May 2024 - Present</p>
                        <p>
                            Research at the Ao Ma lab at the University of Illinois College of Medicine at Chicago. Below are some of my highlights:
                        </p>
                        <ul>
                            <li>
                                Currently, we are testing an algorithm we built to identify pockets and cavities across multiple frames of the protein to see where pockets stay the same and where they disappear.
                            </li>
                        </ul>
                    </div>
                    <img src={require('../assets/uiclogo.jpg')} alt="UIC Medical School Logo" className="research-logo" />
                </div>
            </div>
            
            <SkillsSection theme={theme} />
        </div>
    );
};

export default Home;