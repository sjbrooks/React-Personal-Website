/** About: Component that renders About page.
 *
 * Props: (none)
 *
 * State: (none)
 *
 * Children: ParagraphCard components
 */


import React from 'react';
import './About.css';
import ParagraphCard from './ParagraphCard';
import headshot from './headshot-color.jpg'

function About() {

  const headline = "ABOUT";
  const paragraphs = [
    'I’m Sarah, a brand consultant turned software engineer. Also an animal-lover, pasta enthusiast, and jump-roper. I’ve been interested in coding since I was 10, when I taught myself enough to create a personal website. Since then, I’ve taken several programming classes in college, attended Rithm coding boot camp in SF, and interned as a software engineer at LiveStack, a platform for creators to get paid for live virtual events, where I built the feature to enable creators to authenticate their identity through Instagram, Twitter, and email (technologies included React, Node/Express, PostgreSQL, passport, and sendgrid).',
    'I started my career in brand strategy consulting, where, among other projects, I got to build a lifestyle brand for the US Women\'s National Team, conduct consumer research in Chile, and reposition a big software company in the Bay Area. I learned how to break problems into their component parts, structure my thinking, and persuade others, but I always found myself wanting to spend more time learning how the things I was branding worked – from peripheral catheters to design software.',
    'From that came a reinvigorated interest in engineering, and specifically programming, as a means of understanding how the things we interact with every day are built. Last summer, I decided to make a career change based on that interest, and I’ve been coding daily since. I\'m passionate about expanding the representation of women in tech and look forward to being able to use my skills for social impact.',
    'I graduate from my coding boot camp end of June and will be looking for a full stack software engineering role at a company where I can continue to learn and grow. My experience has been working with JavaScript (React), HTML, and CSS front end, JavaScript (Node/Express) and Python (Flask) back end, and PostgreSQL databases, but I\'m happy to learn new frameworks and languages on the job.',
    <span className="resume-download-container"><a className="resume-download" href="/Sarah Brooks Resume.pdf" download>DOWNLOAD RESUME</a></span>
  ]

  return (
    <div className="About-container">
      <div className="About-headshot">
        <img src={headshot} alt="Sarah Brooks Headshot" />
      </div>
      <div className="About-ParagraphCard">
        <ParagraphCard headline={headline} paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default About;
