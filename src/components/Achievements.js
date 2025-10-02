import React, { useEffect, useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.achievements');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      title: 'AWS Cloud Foundations Certified',
      description: "Successfully completed AWS Cloud Foundations certification, demonstrating expertise in cloud computing fundamentals.",
      icon: 'fab fa-aws',
      color: '#FF9900'
    },
    {
      title: 'Competitive Programming Achievements',
      icon: 'fas fa-code',
      color: '#4CAF50',
      achievements: [
        { text: 'CodeChef Starters 139 (Div 4): Global Rank 227', icon: 'fas fa-trophy' },
        { text: 'LeetCode Weekly Contest 424: Ranked 1918 out of 35,000+ participants', icon: 'fas fa-star' },
        { text: 'Codeforces: Pupil, 1311 rating', icon: 'fas fa-medal' },
        { text: 'CodeChef: 3-star coder', icon: 'fas fa-star' },
        { text: 'LeetCode: 1782 rating (Top 8%)', icon: 'fas fa-trophy' }
      ]
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <h2 className="section-title">
          <span className="gradient-text">Achievements & Honors</span>
        </h2>
        <div className={`achievements-grid ${isVisible ? 'visible' : ''}`}>
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                {achievement.description ? (
                  <p>{achievement.description}</p>
                ) : (
                  <ul className="achievement-list">
                    {achievement.achievements.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{ animationDelay: `${(index * 0.2) + (itemIndex * 0.1)}s` }}
                      >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;