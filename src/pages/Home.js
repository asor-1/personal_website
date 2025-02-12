import React, { useState, useContext } from 'react';
import '../css_pages/Home.css';
import { ThemeContext } from '../context/themeContext';
import resume from '../assets/alexs_resume.pdf';
import Navbar from '../components/nav';
import Container from '../components/container';
import machineLearningIcon from '../assets/skill-pytorch.svg';
import skillpython from '../assets/skill-python.svg';
import skillflask from '../assets/skill-flask.svg';
import skillaws from '../assets/skill-aws.svg';
import skillreact from '../assets/skill-react.svg';
import skillr from '../assets/skill-r.svg';
import skilljava from '../assets/skill-java.svg';
import skillscikit from '../assets/skill-scikit.svg';
import skilltensorflow from '../assets/skill-tensorflow.svg';
import skillgcp from '../assets/skill-gcp.svg';
import Hexagon from '../components/hexagons';
import Courses from '../components/courses';
import SkillsSection from '../components/skills';

const Home = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`home-container ${theme}`}>

            <Hexagon />
            <Container />
            <Navbar />

            <div className={`about-section ${theme}`}>
                <h2 className='about-header'>About Alex...</h2>
                <p>
                    Hi there, 
                    <br></br><br></br>I am a dedicated and attentive ML developer with an interest in computational biology. As a current student and researcher focused on machine learning applications in biology, I am deeply committed to using technology to solve complex problems. 
                    My academic and recreational projects are where I apply my knowledge. I spend most of my time researching, learning, and applying machine learning. 
                    However, when I am not working I am the biggest supporter of the Tottenham Hotspurs (or playing pickleball).
                </p>
            </div>

            <div className={`resume-section ${theme}`}>
                <h2 className='resume-header'>Alex's Resume...(Not up-to-date)</h2>
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
                <h2 className='research-header'>Relevant Research Experience...</h2>
                <div className='nu-research'>
                    <div className='name-role'>
                        <h4 className='place-name'>Feinberg School of Medicine, Northwestern University</h4>
                        <p className='role'>Lab Researcher</p>
                    </div>
                    <p className='date'>July 2023 - Present</p>
                    <p>I built an image sequencing pipeline focused on pancreatic cancer cells...</p>
                </div>
                <div className='name-role'>
                    <h4 className='place-name'>University of Illinois Chicago, Medical School</h4>
                    <p className='role'>Lab Intern</p>
                </div>
                <p className='date'>May 2024 - Present</p>
                <p>High School Degree, planning to continue my education in university...</p>
            </div>

            <div className={`education-section ${theme}`}>
                <h2 className='education-header'>Education...</h2>
                <h4 className ='place-name'>Illinois Mathematics and Science Academy</h4>
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
