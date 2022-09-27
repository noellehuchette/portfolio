import React from 'react';
import projects from './projects';
import './style.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.name} className="project-block">
            <div>
              <a className="project-title" href={project.deployed}>
                {project.name}
              </a>
            </div>
            <p>
              <span className="project-detail-label">Role: </span>
              <span className="project-detail-content">{project.role}</span>
            </p>
            <p>
              <span className="project-detail-label">Date: </span>
              <span className="project-detail-content">{project.date}</span>
            </p>
            <p>
              <span className="project-detail-label">Type: </span>
              <span className="project-detail-content">{project.type}</span>
            </p>

            <p>
              <span className="project-detail-label">Date: </span>
              <span className="project-detail-content">{project.date}</span>
            </p>
            <p>
              <a href={project.github}>github</a>
            </p>
            <span className="project-detail-label">Description: </span>
            <p>
              <span className="project-detail-content">
                {project.description}
              </span>
            </p>
            <span className="project-detail-label">Technologies used: </span>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => {
                return (
                  <span key={tech}>
                    {' '}
                    {idx ? <span className="tech-divider">-</span> : ''} {tech}{' '}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
