import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '../components/nav';
import Graph3D from '../components/graph';
import Container from '../components/container';
import '../css_pages/notes.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Notes = () => {
  const [categories, setCategories] = useState(['Work', 'School', 'Personal']);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isGraphMode, setIsGraphMode] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Sample notes data structure with PDF file paths
  const notes = {
    Work: [
      { id: '1', title: 'Protein Conformations - 7/25/24', pdfPath: '../assets/notes_pdfs/' },
      { id: '2', title: 'Knowledge Graph - 8/2/24', pdfPath: '../assets/notes_pdfs/' }
    ],
    School: [
      { id: '3', title: 'Study Plan', pdfPath: '../assets/notes_pdfs/' },
      { id: '4', title: 'Research Topics', pdfPath: '../assets/notes_pdfs/' }
    ],
    Personal: [
      { id: '5', title: 'Project Ideas - 7/29/24', pdfPath: '../assets/notes_pdfs/' }
    ]
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedNote(null);
    setPageNumber(1);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setPageNumber(1);
  };

  const toggleGraphMode = () => {
    setIsGraphMode(!isGraphMode);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <div className='home-container'>
      <Container />
      <Navbar />
      <div className='about-notes'>
        <h3 className='about-header'>Alex's Notes...</h3>
        <p>
          This is my notes section. Here, is where I document my thoughts, ideas, and insights on various topics that pique my interest. 
          Whether it's a dive into machine learning, reflections on recent projects, or ideas of new concepts, these notes are a snapshot of my brain in action.
          <br /><br />
          Through these notes, I not only keep track of my learning but also provide valuable insights to others who might find them useful. 
          Each entry is a step in my ongoing journey to understand, innovate, and grow.
          
          Feel free to explore, and I hope you find something here that sparks your curiosity and inspires you as much as it does me. 
        </p>
        <p>If you want to take a look at my actual notes click on the repsective notes. If you just want a general sense of my notes, then look at my graph.</p>
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
          <button onClick={toggleGraphMode} className={`graph-button ${isGraphMode ? 'active' : ''}`}>
            Graph {isGraphMode ? 'ON' : 'OFF'}
          </button>
        </div>

        {!isGraphMode ? (
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
                <Document
                  file={selectedNote.pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <div className="pdf-controls">
                  <button onClick={previousPage} disabled={pageNumber <= 1}>Previous</button>
                  <p>Page {pageNumber} of {numPages}</p>
                  <button onClick={nextPage} disabled={pageNumber >= numPages}>Next</button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="graph-container">
            <Graph3D />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;