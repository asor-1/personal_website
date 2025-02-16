import React, { useState } from 'react';
import '../css_pages/Interest.css';
import Navbar from '../components/nav';
import Container from '../components/container';
import Graph3D from '../components/graph';
import mathML from '../assets/math_for_mL.jpg';
import mozi from '../assets/moziCover.jpg';
import jstewart from '../assets/jstewart.jpg';
import Hexagon from '../components/hexagons';

const Interest = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const BookshelfContainer = () => {
        const books = [
            {
                image: jstewart,
                title: "Calculus: Early Transcendentals: 8th Edition",
                author: "James Stewart",
                rating: 5,
                description: "Stewart conveys not only the utility of calculus to help you develop technical competence, but also gives you an appreciation for the intrinsic beauty of the subject. His patient examples and built-in learning aids will help you build your mathematical confidence and achieve your goals in the course."
            },
            {
                image: mozi,
                title: "The Mozi: A Complete Translation",
                author: "Ian Johnston (Translator)",
                rating: 5,
                description: "It is one of the few texts to survive the Warring States period (403-221 B.C.E.) and is crucial to understanding the origins of Chinese philosophy. Ian Johnston provides an English translation of the entire Mozi, with annotations and historical context."
            },
            {
                image: mathML,
                title: "Mathematics for Machine Learning",
                author: "Marc Peter Deisenroth",
                rating: 4,
                description: "Deisenroth introduces you to the fundamental mathematical tools needed to understand machine-learning; this includes linear algebra, analytic geometry, matrix decomposition, vector calculus, optimization, probability, and statistics."
            },
            {
                image: "/api/placeholder/150/200",
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                rating: 3,
                description: "A powerful story about racial injustice and the loss of innocence in a small Southern town."
            },
        ];

        const renderStars = (rating) => {
            // Unicode characters for stars
            const fullStar = '★';  // Full star
            const halfStar = '◐';  // Half star (Unicode half circle)
            const emptyStar = '☆'; // Empty star
            
            let starsString = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            
            // Add full stars
            for (let i = 0; i < fullStars; i++) {
                starsString += fullStar;
            }
            
            // Add half star if needed
            if (hasHalfStar) {
                starsString += halfStar;
            }
            
            // Add empty stars
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                starsString += emptyStar;
            }
            
            return starsString;
        };

        return (
            <div className="interest-container bookshelf-container">
                <h3>Bookshelf</h3>
                <div className="books-list">
                    {books.map((book, index) => (
                        <div key={index} className="book-item">
                            <img src={book.image} alt={book.title} className="book-image" />
                            <div className="book-info">
                                <div className="book-title-rating">
                                    <h4>{book.title}</h4>
                                    <div className="book-rating">
                                        {renderStars(book.rating)}
                                    </div>
                                </div>
                                <p className="book-author">by {book.author}</p>
                                <p className="book-description">{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const HobbiesContainer = () => {
        const hobbies = [
            {
                icon: "⚽",
                title: "Spurs Fan",
                description: "I love watching the Tottenham Hotspurs."
            },
            {
                icon: "🎮",
                title: "Gaming",
                description: "I enjoy strategy and role-playing games that challenge my mind."
            }
        ];

        return (
            <div className="interest-container hobbies-container">
                <h3>Hobbies</h3>
                <div className="hobbies-grid">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="hobby-card">
                            <div className="hobby-icon">{hobby.icon}</div>
                            <h4 className="hobby-title">{hobby.title}</h4>
                            <p className="hobby-description">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const GraphContainer = () => (
        <div className="interest-container graph-container">
            <h3>3D Graph</h3>
            <Graph3D />
        </div>
    );

    return (
        <div className="home-container">
            <Hexagon />
            <Container />
            <Navbar />
            <div className='about-section'>
                <h3 className='about-header'>Alex's Interests...</h3>
                <p> These are just some of the things that I am interested in. Feel free to check out what I'm passionate about outside of my studies!</p>
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
                <button 
                    className={`nav-button ${activeTab === 'graph' ? 'active' : ''}`} 
                    onClick={() => toggleTab('graph')}
                >
                    3D Graph
                </button>
            </div>

            {/* Conditional rendering of sections */}
            {activeTab === 'bookshelf' && <BookshelfContainer />}
            {activeTab === 'hobbies' && <HobbiesContainer />}
            {activeTab === 'graph' && <GraphContainer />}
        </div>
    );
};

export default Interest;