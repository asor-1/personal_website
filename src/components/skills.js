import React from 'react';
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

const SkillsSection = ({ theme }) => {
  const skillCategories = {
    'Programming Languages/Libraries': [
      { icon: skillpython, name: 'Python' },
      { icon: skilljava, name: 'Java' },
      { icon: skillr, name: 'R' }
    ],
    'Web Development': [
      { icon: skillreact, name: 'React' },
      { icon: skillflask, name: 'Flask' }
    ],
    'Machine Learning': [
      { icon: skilltensorflow, name: 'TensorFlow' },
      { icon: machineLearningIcon, name: 'PyTorch' }
    ],
    'Cloud Providers': [
      { icon: skillaws, name: 'AWS' },
      { icon: skillgcp, name: 'GCP' }
    ]
  };

  return (
    <div className={`list-skills ${theme}`}>
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      
      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="text-lg font-semibold mb-3">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="skill-item flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} Icon`} 
                    className="w-8 h-8 mr-3"
                  />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .list-skills {
            width: 80%;
            max-width: 45%;
            padding: 2rem;
            border-radius: 0.625rem;
            background-color: var(--card-bg-color);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
          }

          .skill-category {
            margin-bottom: 1.5rem;
          }

          .skill-item {
            background-color: var(--card-bg-color);
            border: 1px solid var(--border-color);
          }

          .skill-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .skill-item img {
            transition: transform 0.3s ease;
          }

          .skill-item:hover img {
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            .list-skills {
              width: 95%;
              max-width: 100%;
              padding: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SkillsSection;