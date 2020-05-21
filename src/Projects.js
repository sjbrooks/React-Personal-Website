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
import matchingGame from './Matching Game.gif';

function Projects() {

  const headline = "PROJECTS";
  const paragraphs = ["The following apps are built with javascript, python, HTML, and CSS, and use a mix of React, Flask, and Express libraries"];

  const projects = [
    {
      img: matchingGame,
      projectName: "Memory Card Game",
      text: "Card-based memory game built using HTML, CSS, and JavaScript (without frameworks/third-party libraries). Players are shown a collection of cards, face down, and can click on a card to reveal what’s underneath. Players can click up to two cards at once, at which point the game checks to see whether they match. If they do, they remain face up; Otherwise, they remain displayed for a second before flipping back down. The goal of the game is to match up pairs of cards in as few attempts as possible. The game displays the number of attempts of the current game and best game, and allows the user to reset the game (and reshuffle the cards) at any time."
    }
  ];
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
