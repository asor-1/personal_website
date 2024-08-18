import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/nav';
import Container from '../components/container';
import axios from 'axios';
import '../css_pages/notes.css';

const Notes = () => {
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
      <Container />
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