import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      {link && (
        <a href={link} className="project-link" target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;