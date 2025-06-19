import React from 'react';
import styles from '../css_pages/skills.module.css'; // Import the CSS module

// Import skill icons
import skillpython from '../assets/skill-python.svg';
import skilljava from '../assets/skill-java.svg';
import skillr from '../assets/skill-r.svg';
import skillreact from '../assets/skill-react.svg';
import skilltensorflow from '../assets/skill-tensorflow.svg';
import machineLearningIcon from '../assets/skill-pytorch.svg';
import skillflask from '../assets/skill-flask.svg';
import skillaws from '../assets/skill-aws.svg';
import skillscikit from '../assets/skill-scikit.svg';
import skillgcp from '../assets/skill-gcp.svg';

const SkillsSection = ({ theme }) => { // Keep theme prop if you have an external theme toggle
  const skillCategories = {
    'Programming & Libraries': [
      { icon: skillpython, name: 'Python' },
      { icon: skilljava, name: 'Java' },
      { icon: skillr, name: 'R' },
      { icon: skillscikit, name: 'Scikit-learn' },
      { icon: skilltensorflow, name: 'TensorFlow' },
      { icon: machineLearningIcon, name: 'PyTorch' },
    ],
    'Web & Cloud': [
      { icon: skillreact, name: 'React' },
      { icon: skillflask, name: 'Flask' },
      { icon: skillaws, name: 'AWS' },
      { icon: skillgcp, name: 'GCP' },
    ],
  };

  // Add the 'dark' class to the body or a parent element based on the theme prop
  // This is a common way to handle theming with plain CSS and CSS Variables
  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          My <span className={styles.gradientText}>Advanced Skills</span>
          <span className={styles.mainTitleUnderline}></span>
        </h2>

        <div className={styles.categoriesGrid}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className={styles.skillCategoryCard}
            >
              <h3 className={styles.categoryTitle}>
                {category}
                <span className={styles.categoryTitleUnderline}></span>
              </h3>
              <div className={styles.skillsGrid}>
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={styles.skillItem}
                  >
                    <div className={styles.skillItemGlow}></div> {/* For the glow effect */}
                    <img
                      src={skill.icon}
                      alt={`${skill.name} Icon`}
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>
                      {skill.name}
                    </span>
                    <div className={styles.skillItemBorder}></div> {/* For the border on hover */}
                  </div>
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