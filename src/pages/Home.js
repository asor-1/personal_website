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


const Home = () => {
    const [showPdf, setShowPdf] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`home-container ${theme}`}>
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
            <div className={`research-section ${theme}`}>
                <h2 className='research-header'>Relevant Work Experience...</h2>
                <div clasName='nu-research'>
                    <div className='name-role'>
                    <h4 className='place-name'>OpenMind - Mental Health Initiative</h4>
                    <p className = 'role'>Co-Founder/CTO (AI developer)</p>
                    </div>
                        <p className='date'>December 2022 - Present</p>
                        <p>The initiative offers comprehensive resources and services to support individuals in their mental wellness journey. The organization offers a range of traditional mental health resources, such as therapy and support groups. The flagship offering is an AI-powered mental health chatbot therapist app named Quinn, designed to provide accessible, on-demand support for individuals experiencing mental health challenges. We also created an assistant AI for Quinn that provides directions to support groups and facilities and updates user information. <br></br><br></br>We have raised over $20,000 from competitions and grants. Conducted a successful pilot within our school, as well as pilots with other organizations and mental health clinics. OpenMind was invited to speak at Springfield, IL congress.</p>
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

            <div className={`education-section ${theme}`}>
                <h2 className='education-header'>Education...</h2>
                <h4 className ='place-name'>
                    Illinois Mathematics and Science Academy
                </h4>
                <p className = 'role'>#10 Public High School in America & #3 Public High School in Illinois</p>
                <p className='date'>August 2022 - June 2025</p>
                <p>
                    High School Degree
                </p>
                <p className='role'>Planning to continue my education in university. With the intention of pursuing a degree in Computer Science and Biology. 
                </p>
            </div>
            <div className='education-classes'>
                <h2 className='education-header'>Relevant Courses...</h2>
                <p className = "">These courses do not limit what I know.</p>
                <div className='course-list'>
                    <div className='course-item'>
                        <span className='course-code'>Advanced Programming</span>
                        <span className='course-name'>Advanced Computer Science (algorithms & data structures)</span>
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
                        <span className='course-code'>Calculus Physics: Mechanics</span>
                        <span className='course-name'>Equivalent to AP Physics C</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>BC Calculus 1&2</span>
                        <span className='course-name'>Equivalent to calculus I</span>
                    </div>
                    <div className='course-item'>
                        <span className='course-code'>ABS</span>
                        <span className='course-name'>Molecular Biology</span>
                    </div>
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