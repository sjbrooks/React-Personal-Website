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

function Projects() {

  const headline = "PROJECTS";
  const paragraphs = ["More to come"];

  return (
    <div className="Projects">
      <ParagraphCard headline={headline} paragraphs={paragraphs} />
    </div>
  );
}

export default Projects;
