import React from 'react';
import styles from '../css_pages/skills.module.css'; // Original CSS module name

const SkillsSection = () => { // Removed 'theme' prop
  // Define your technical expertise data structured like the image
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
    ],
    languages: [
      { name: 'Python', percentage: 95 },
      { name: 'Java', percentage: 80 },
      { name: 'JavaScript', percentage: 45 },
      { name: 'C++', percentage: 45 },
    ],
  };

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Tech Stack</h2>

        <div className={styles.contentGrid}>
          <div className={styles.coreSkillsColumn}>
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

          {/* Right Column: The Languages */}
          <div className={styles.languagesColumn}>
            <h3 className={styles.languagesTitle}>Languages</h3>
            <div className={styles.languageList}>
              {expertiseData.languages.map((lang, index) => (
                <div key={index} className={styles.languageItem}>
                  <div className={styles.languageNameAndPercentage}>
                    <span className={styles.languageName}>{lang.name}</span>
                    <span className={styles.languagePercentage}>{lang.percentage}%</span>
                  </div>
                  <div className={styles.progressBarBackground}>
                    <div
                      className={styles.progressBarFill}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; // Export as SkillsSection as per original file name