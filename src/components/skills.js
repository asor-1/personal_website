import React from 'react';
import styles from '../css_pages/skills.module.css';

const SkillsSection = () => {
  const expertiseData = {
    coreSkills: [
      {
        category: 'Machine Learning & AI',
        level: 'Advanced',
        skills: ['CNNs', 'Transformers', 'RAG', 'LLMs', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow'],
      },
      {
        category: 'Software Development',
        level: 'Advanced',
        skills: ['Python', 'JavaScript/TypeScript', 'React', 'Node.js', 'SQL', 'Git', 'Docker', 'System Design'],
      },
      {
        category: 'Physics & Mathematics',
        level: 'Advanced',
        skills: ['Quantum Mechanics', 'Statistical Mechanics', 'Linear Algebra', 'Calculus', 'Differential Equations', 'Data Analysis'],
      },
      // NEW: Languages added as a category
      {
        category: 'Languages',
        level: 'Advanced',
        skills: ['Python', 'Java', 'JavaScript/TypeScript', 'C++'],
      },
    ],
    // REMOVED: Old languages array with percentages
  };

  return (
    <section className={styles.skillsSection}>
      {/* The main .container is now styled like the other page sections */}
      <div className={styles.container}>
        {/* REMOVED: h2 mainTitle (it's in About.js now) */}

        {/* UPDATED: Simplified to a single grid */}
        <div className={styles.skillsGrid}>
          {expertiseData.coreSkills.map((section, index) => (
            <div key={index} className={styles.skillCategoryCard}>
              <h3 className={styles.categoryTitle}>
                {section.category}
                <span className={styles.skillLevelTag}>{section.level}</span>
              </h3>
              <div className={styles.skillTagsContainer}>
                {section.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;