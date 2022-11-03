import React from 'react';
import projects from './projects';
import './style.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="block-content">
        <div className="block-title">
          <h3>projects</h3>
        </div>
        {projects.map((project) => {
          return (
            <div key={project.name} className="project-block">
              <div className="project-header">
                <a className="project-title" href={project.deployed}>
                  {project.name}
                </a>
              </div>
              <div className="project-content">
                <div>
                  <span className="project-detail-label">Role: </span>
                  <span className="project-detail-content">{project.role}</span>
                </div>
                <div>
                  <span className="project-detail-label">Date: </span>
                  <span className="project-detail-content">{project.date}</span>
                </div>
                <div>
                  <span className="project-detail-label">Type: </span>
                  <span className="project-detail-content">{project.type}</span>
                </div>
                <span className="project-detail-label">Description: </span>
                <div>
                  <span className="project-detail-content">
                    {project.description}
                  </span>
                </div>
                <div className="tech-stack">
                  <span className="project-detail-label">
                    Technologies Used:{' '}
                  </span>
                  {project.tech.map((tech, idx) => {
                    return (
                      <span key={tech}>
                        {idx ? <span className="tech-divider">, </span> : ''}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="github">
                  <a href={project.github}>github</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
