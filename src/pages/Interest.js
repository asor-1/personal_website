import React, { useState } from 'react';
import '../css_pages/Interest.css';
import headshot from '../assets/headshot.jpg';
import Navbar from '../components/nav';
import book1 from '../assets/math_for_mL.jpg'
import githubIcon from '../assets/skill-github.svg';
import instagramIcon from '../assets/skill-instagram.svg';
import linkedinIcon from '../assets/skill-linkedin.svg';
import gmailIcon from '../assets/skill-gmail.svg';

const Interest = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const BookshelfContainer = () => {
        const books = [
            {
                image: "/api/placeholder/150/200",
                title: "Dune",
                author: "Frank Herbert",
                description: "A science fiction masterpiece about politics, religion, and the struggle for power on a desert planet."
            },
            {
                image: "/api/placeholder/150/200",
                title: "1984",
                author: "George Orwell",
                description: "A dystopian novel set in a totalitarian society, exploring themes of government surveillance and control."
            },
            {
                image: book1,
                title: "Mathematics for Machine Learning",
                author: "Marc Peter Deisenroth",
                description: "Deisenroth introduces you to the fundamental mathematical tools needed to understand machine-learning; this includes linear algebra, analytic geometry, matrix decomposition, vector calc, optimization, probability and statistics."
            },
            {
                image: "/api/placeholder/150/200",
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "A powerful story about racial injustice and the loss of innocence in a small Southern town."
            },
        ];

        return (
            <div className="interest-container bookshelf-container">
                <h3>Bookshelf</h3>
                <div className="books-list">
                    {books.map((book, index) => (
                        <div key={index} className="book-item">
                            <img src={book.image} alt={book.title} className="book-image" />
                            <div className="book-info">
                                <h4>{book.title}</h4>
                                <p className="book-author">by {book.author}</p>
                                <p className="book-description">{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const HobbiesContainer = () => (
        <div className="interest-container hobbies-container">
            <h3>Hobbies</h3>
            <p>Here are some of my favorite hobbies...</p>
        </div>
    );

    return (
        <div className="home-container">
            <div className="content">
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
                    <div className="headshot">
                        <img 
                            src={headshot} 
                            alt="Alex Sorescu" 
                        />
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
            <Navbar />
            <div className='about-section'>
                <h3 className='about-header'>Alex's Interests...</h3>
                <p> These are just some of the things that I am interested. Feel free to check out what I'm interested outside of coding!
                </p>
            </div>
            <div className="interest-navbar">
                <button 
                    className={`nav-button ${activeTab === 'bookshelf' ? 'active' : ''}`} 
                    onClick={() => toggleTab('bookshelf')}
                >
                    Book Shelf
                </button>
                <button 
                    className={`nav-button ${activeTab === 'hobbies' ? 'active' : ''}`} 
                    onClick={() => toggleTab('hobbies')}
                >
                    Hobbies
                </button>
            </div>

            {/* Conditional rendering of containers */}
            {activeTab === 'bookshelf' && <BookshelfContainer />}
            {activeTab === 'hobbies' && <HobbiesContainer />}
        </div>
    );
};

export default Interest;