/** Projects: Component that renders projects page.
 *
 * Props: (none)
 *
 * State: (none)
 *
 * Children: Uses ParagraphCard component
 */


import React from 'react';
import './Projects.css';
import ParagraphCard from './ParagraphCard';
import ProjectCard from './ProjectCard';
import projects from './projectsData'


function Projects() {

  const headline = "PROJECTS";
  const paragraphs = ["I built the following apps and games using a mix of Javascript (plain, React for frontend, Express for backend), Python (Flask for backend), PostgreSQL database, HTML, and CSS."];

  const projectCards = projects.map((p, idx) => <ProjectCard key={idx} project={p} />)

  return (
    <div className="Projects">
      <ParagraphCard className="Project-ParagraphCard" headline={headline} paragraphs={paragraphs} />
      <div className="projectCards">
        {projectCards}
      </div>
    </div>
  );
}

export default Projects;
