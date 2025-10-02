import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
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

    const element = document.querySelector('.projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Tweetube',
      description: 'Developed a Node.js backend for Tweetube a scalable API enabling a video streaming and social interaction platform. Integrated features like user authentication, personalized channels, media uploads, follower-based subscriptions, and watch history tracking.',
      technologies: ['Express.js', 'MongoDB', 'Node.js', 'JavaScript'],
      icon: 'fas fa-video',
      githubLink: 'https://github.com/ap0309/Tweetube'
    },
    {
      title: 'QuickPing-Chatapp',
      description: 'Engineered a secure and scalable messaging app using React.js, Node.js and MongoDB. Integrated JWT-based authentication and WebSockets for real-time communication. Optimized UX with responsive design and caching to handle Large number of concurrent users.',
      technologies: ['MongoDB', 'Express', 'React.js', 'Node.js', 'JWT auth'],
      icon: 'fas fa-comments',
      githubLink: 'https://github.com/ap0309/QuickPing-Chatapp'
    },
    {
      title: 'Real-Estate Management',
      description: 'Developed backend using Node.js, Express, and MongoDB with RESTful APIs for user authentication, property listing CRUD operations, secure access control, and Firebase-based image uploads.',
      technologies: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      icon: 'fas fa-building',
      githubLink: 'https://github.com/ap0309/Summer_Internship'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      className="tech-tag"
                      key={techIndex}
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.demoLink || project.githubLink) && (
                  <div className="project-links">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                        style={{ animationDelay: `${(index * 0.2) + 0.3}s` }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        style={{ animationDelay: `${(index * 0.2) + 0.4}s` }}
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;