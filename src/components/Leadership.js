import React, { useEffect, useState } from 'react';
import './Leadership.css';

const Leadership = () => {
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

    const element = document.querySelector('.leadership');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const leadershipRoles = [
    {
      title: 'Vice President, Computer Society of India, NU',
      period: '2024 – Present',
      icon: 'fas fa-laptop-code',
      color: '#4CAF50',
      description: [
        'Played a pivotal role in organizing HackNuthon 6.0, a national hackathon at Nirma University with over 1200 participants.',
        'Crafted intricate problemsets for contests organized for juniors.',
        'Led technical initiatives and community building activities.'
      ]
    },
    {
      title: 'Upcoming Spring Intern, Cisco Systems',
      period: '2026',
      icon: 'fas fa-building',
      color: '#2196F3',
      description: [
        'Upcoming Spring Internship at Cisco Systems, Karnataka Bengaluru.',
        'Will be working on cutting-edge networking technologies and software development projects.',
        'Excited to contribute to Cisco\'s innovative solutions and gain hands-on experience in enterprise networking.'
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        <h2 className="section-title">
          <span className="gradient-text">Internship and Position of Responsibility</span>
        </h2>
        <div className={`leadership-grid ${isVisible ? 'visible' : ''}`}>
          {leadershipRoles.map((role, index) => (
            <div
              className="leadership-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="leadership-header">
                <div className="leadership-icon" style={{ backgroundColor: role.color }}>
                  <i className={role.icon}></i>
                </div>
                <div className="leadership-title">
                  <h3>{role.title}</h3>
                  <span className="leadership-period">{role.period}</span>
                </div>
              </div>
              <ul className="leadership-list">
                {role.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{ animationDelay: `${(index * 0.2) + (itemIndex * 0.1)}s` }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="leadership-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;