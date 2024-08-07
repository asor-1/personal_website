import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Notes from './pages/Notes';
import Interest from './pages/Interest';
import Navbar from './components/nav';

const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/interest" element={<Interest />} />
            </Routes>
        </div>
    );
};

export default App;