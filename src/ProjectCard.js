/** ProjectCard: Presentational component that renders a card with a formatted picture and text.
 *
 * Props:
 * - picture: picture or screen capture of the project
 * - text: explanation of the project and technologies used
 *
 * State: (none)
 *
 * Parents: Used Projects components
 */


import React from 'react';
import './ProjectCard.css';


function ProjectCard({ project: { img, projectName, text, demoLink, githubLink } }) {

  return (
    <div className="ProjectCard">
      <div className="ProjectCard-container">
        <div className="ProjectCard-img">
          <a href={demoLink}><img src={img} alt={projectName} /></a>
        </div>
        <div className="ProjectCard-text">
          <h1 className="ProjectCard-headline">
            {projectName.toUpperCase()}
          </h1>
          {text}
          <p className="project-links">View <a href={demoLink}>demo</a>. View on <a href={githubLink}>GitHub</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
