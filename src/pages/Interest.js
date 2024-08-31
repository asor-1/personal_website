import React, { useState } from 'react';
import '../css_pages/Interest.css';
import Navbar from '../components/nav';
import Container from '../components/container'
import mathML from '../assets/math_for_mL.jpg'
import mozi from '../assets/moziCover.jpg'
import jstewart from '../assets/jstewart.jpg'

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
                description: "Stewart conveys not only the utility of calculus to help you develop technical competence, but also gives you an appreciation for the intrinsic beauty of the subject. His patient examples and built-in learning aids will help you build your mathematical confidence and achieve your goals in the course."
            },
            {
                image: mozi,
                title: "The Mozi: A Complete Translation",
                author: "Ian Johnston (Translator)",
                description: "It is one of the few texts to survive the Warring States period (403-221 B.C.E.) and is crucial to understanding the origins of Chinese philosophy and two other foundational works, the Mengzi and the Xunzi. Ian Johnston provides an English translation of the entire Mozi, as well as the first bilingual edition in any European language to be published in the West. His careful translation reasserts the significance of the text's central doctrines, and his annotations and contextual explanations add vivid historical and interpretive dimensions"
            },
            {
                image: mathML,
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
          <Container />
          <Navbar />
            <div className='about-section'>
                <h3 className='about-header'>Alex's Interests...</h3>
                <p> These are just some of the things that I am interested. Feel free to check out what I'm interested in outside of my studies!
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