import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/nav';
import axios from 'axios';
import '../css_pages/notes.css';
import headshot from '../assets/headshot.jpg';
import githubIcon from '../assets/skill-github.svg';
import instagramIcon from '../assets/skill-instagram.svg';
import linkedinIcon from '../assets/skill-linkedin.svg';
import gmailIcon from '../assets/skill-gmail.svg';

const Notes = () => {
  const [showMap, setShowMap] = useState(false);
  const [categories, setCategories] = useState(['Work', 'School', 'Personal']);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [notes, setNotes] = useState({});
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteBody, setNewNoteBody] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedNote(null);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleAdminClick = () => {
    const password = prompt('Enter password:');
    if (password === '1234') {
      setIsAdminMode(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleSubmitNewNote = async () => {
    if (newNoteTitle && newNoteBody && selectedCategory) {
      const newNote = {
        id: Date.now().toString(),
        title: newNoteTitle,
        content: newNoteBody,
        category: selectedCategory,
      };

      try {
        await axios.post('http://localhost:5000/api/notes', newNote);
        setNotes(prevNotes => ({
          ...prevNotes,
          [selectedCategory]: [...(prevNotes[selectedCategory] || []), newNote],
        }));
        setNewNoteTitle('');
        setNewNoteBody('');
      } catch (error) {
        console.error('Error saving note:', error);
      }
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <div className='home-container'>
      <div className="content personal-info">
      <div className='main-content'>
        <header className="header">
          {showMap && (
            <div className="map-overlay">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95250.86932393022!2d-88.38929098085609!3d41.750942791327915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee54d4ed5111b%3A0x7fd1f848c350e85d!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1722031888377!5m2!1sen!2sus"
                title="Map of Aurora, IL"
              ></iframe>
              <button onClick={() => setShowMap(false)} className="close-map">Close Map</button>
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
                <span className="location" onClick={() => setShowMap(!showMap)}>
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
        <footer className="print">
          asorescu@imsa.edu • GitHub: asor-1
        </footer>
        <footer className="no-print">
          <a href="mailto:asorescu@imsa.edu" title="Email Alex" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} className='footer-icon' alt='Gmail Icon'/>
          </a>
          <a href="https://linkedin.com/in/aidanandrewss" title="Visit Alex's LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} className='footer-icon' alt='LinkedIn Icon'/>
          </a>
          <a href="https://github.com/asor-1" title="Visit Alex's GitHub" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} className='footer-icon' alt='GitHub Icon'/>
          </a>
          <a href="https://instagram.com/asor-1" title="Visit Alex's Instagram" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} className='footer-icon' alt='Instagram Icon'/>
          </a>
        </footer>
        </div>
                <div className="headshot">
                    <img src={headshot} alt="Alex Sorescu" />
                </div>
      </div>
      <Navbar />
      <div className='about-notes'>
        <h3 className='about-header'>Alex's Notes...</h3>
            <p>
            This is my notes section. Here, is where I document my thoughts, ideas, and insights on various topics that pique my interest. 
            Whether it's a dive into machine learning, reflections on recent projects, or ideas of new concepts, these notes are a snapshot of my brain in action.
            <br></br>
            <br></br>
            Through these notes, I not only keep track of my learning but also provide valuable insights to others who might find them useful. 
            Each entry is a step in my ongoing journey to understand, innovate, and grow.
            
            Feel free to explore, and I hope you find something here that sparks your curiosity and inspires you as much as it does me. 

          </p>
      </div>
      <div className="notes-section">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
          <button onClick={handleAdminClick} className="admin-button">Admin</button>
        </div>

        {isAdminMode && (
          <div className="admin-panel">
            <h2>New Note</h2>
            <input 
              type="text" 
              value={newNoteTitle} 
              onChange={(e) => setNewNoteTitle(e.target.value)} 
              placeholder="Title for note"
            />
            <textarea 
              value={newNoteBody} 
              onChange={(e) => setNewNoteBody(e.target.value)} 
              placeholder=" Markdown Cheat Sheet: 
                          #H1...
                          **bold text** *italicized text* > blockquote `code` ![alt text](image.jpg) [title](https://www.example.com) 
                          Task list:
                          - [x] Write the press release
                          - [ ] Update the website
                          "
            />
            <button onClick={handleSubmitNewNote}>Save Note</button>
          </div>
        )}

        <div className="notes-display">
          {selectedCategory && notes[selectedCategory] && (
            <div className="notes-list">
              {notes[selectedCategory].map((note) => (
                <div 
                  key={note.id} 
                  className={`note-title ${selectedNote === note ? 'active' : ''}`}
                  onClick={() => handleNoteClick(note)}
                >
                  {note.title}
                </div>
              ))}
            </div>
          )}
          {selectedNote && (
            <div className="note-content">
              <h3>{selectedNote.title}</h3>
              <ReactMarkdown>{selectedNote.content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;