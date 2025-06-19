import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Interest from './pages/Interest';
import About from './pages/About';
import Navbar from './components/nav';

const App = () => {
    return (
        <ThemeProvider>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/interest" element={<Interest />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
};

export default App;