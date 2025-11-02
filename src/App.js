import React from 'react';
// Import Navigate to handle the redirect
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import About from './pages/About';
import Navbar from './components/nav';

const App = () => {
    return (
        <ThemeProvider>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<About />} />
                    {/* Any traffic to /about will be redirected to / */}
                    <Route path="/about" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
};

export default App;

