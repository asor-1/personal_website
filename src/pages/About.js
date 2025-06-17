import React, { useState, useContext, useEffect, useRef } from 'react';
import '../css_pages/about.css';
import { ThemeContext } from '../context/themeContext';
import GitHubCalendar from 'react-github-calendar';
import resume from '../assets/alexs_resume.pdf';
import Navbar from '../components/nav';
import Container from '../components/container';
import Courses from '../components/courses';
import SkillsSection from '../components/skills';
import PersonalInfoCard from '../components/container';

const Home = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext); // <-- includes toggle
    
    return (
        <div className={`home-container ${theme}`}>
            <button className="theme-toggle-button" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <PersonalInfoCard />
            </div>
            <Navbar />
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
                    <div className='name-role'>
                        <h4 className='place-name'>OpenMind - Mental Health Initiative</h4>
                        <p className='role'>Co-Founder/CTO (AI developer)</p>
                    </div>
                    <p className='date'>December 2022 - Present</p>
                    <p>The initiative offers comprehensive resources and services to support individuals in their mental wellness journey...</p>
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


            <div className={`education-section ${theme}`}>
                <h2 className='education-header'>Education...</h2>
                <h4 className ='place-name'>University of Maryland, College Park (UMD)</h4>
                <p className='role'>#10 Ranked Computer Science program in the nation according to csrankings.org</p>
                <p className='date'>Expected Graduation: August 2025 - June 2029</p>
                <p>Bachelor of Science (BS): Computer Science with a specialization in Machine Learning</p>
                <h4 className ='place-name'>Illinois Mathematics and Science Academy (IMSA)</h4>
                <p className='role'>#10 Public High School in America & #3 Public High School in Illinois</p>
                <p className='date'>August 2022 - June 2025</p>
                <p>High School Degree</p>
            </div>
                <Courses />

           
            <SkillsSection theme={theme} />
        </div>
    );
};

export default Home;
