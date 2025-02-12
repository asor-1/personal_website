import React, { useState } from 'react';
import '../css_pages/courses.css'; // Import CSS for styling

// Course Data (Organized by Category)
const coursesData = {
    "Computer Science": [
        { code: "(HS) Advanced Programming", name: "Advanced Computer Science (Algorithms & Data Structures)" },
        { code: "(HS) CS Seminar: Machine Learning", name: "Intro to Machine Learning (CNN & Intent Classification)" },
        { code: "(HS) OOP", name: "Object-Oriented Programming (Java)" },
        { code: "(HS) Linux and Cybersecurity", name: "Linux, cybersecurity, scripting, encryption, and hacking basics."}
    ],
    "Mathematics": [
        { code: "(HS) Calculus II", name: "University-level calculus II focusing on sequences & series, parametric equations, & polar coordinates" },
        { code: "(HS) Calculus I", name: "University-level calculus I focusing on integrals, derivatives, & limits" },
        { code: "(SS) Discrete Mathematics", name: "Logic, Set Theory, & Graph Theory" }
    ],
    "Biology/Chemistry/Physics": [
        { code: "(HS) Advanced Biology", name: "Studying cellular/molecular biology through biological processes & replication"},
        { code: "(HS) PCHEM", name: "Thermodynamics, kinetic theory, & quantum mechanics in chemistry" },
        { code: "(HS) Calculus-Based Mechanics", name: "University-level physics focusing on Newton’s laws, momentum, energy, & rotational motion" },
        { code: "(HS) Modern Physics", name: "Studying special relativity, quantum mechanics, & particle physics"},
        { code: "(HS) Intro-physics & Intro-Chem", name: "AP Physics 1 equivalent | Introduction to chemistry"}
    ]
};

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState("Computer Science"); // Default category

    return (
        <div className='education-classes'>
            <h2 className='education-header'>Relevant Courses</h2>
            <p>Click on a category to view the courses I've taken.</p>
            <p style={{ fontWeight: 'bold' }}>
                Important note: any class with (UNI) means I took it in university, any class with (HS) means I took it in high school, and any (SS) means I self-studied the material.
            </p>
            {/* Menu for Selecting Categories */}
            <div className="course-menu">
                {Object.keys(coursesData).map((category) => (
                    <button
                        key={category}
                        className={`courses-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Display Courses based on Selected Category */}
            <div className='course-list'>
                {coursesData[selectedCategory].map((course, index) => (
                    <div key={index} className='course-item'>
                        <span className='course-code'>{course.code}</span>
                        <span className='course-name'>{course.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
