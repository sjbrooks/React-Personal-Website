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
    'I’m Sarah, a brand consultant turned programmer. Also an animal-lover, pasta enthusiast, and jump-roper. I’ve been interested in coding since I was 10, when I taught myself enough to create a blog. Since then, I’ve taken several programming classes in college and taught myself Javascript on the side.',
    'I started my career in brand strategy consulting, where, among other projects, I got to build a lifestyle brand for the US Women\'s National Team, conduct consumer research in Chile, and reposition a big software company in the Bay Area. I learned how to break problems into their component parts, structure my thinking, and persuade others, but I always found myself wanting to spend more time learning how the things I was branding worked – from peripheral catheters to design software.',
    'From that came a reinvigorated interest in engineering, and specifically coding, as a means of understanding how things we interact with every day are built. Last summer, I decided to make a career change based on that interest, and I’ve been coding daily since. My goals coming out of coding bootcamp are to take a software engineering role where I can continue to learn and grow, represent women in tech, and eventually use my skills for social impact.',
    <a className="resume-download" href="/Sarah Brooks Resume.pdf" download>DOWNLOAD RESUME</a>
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
