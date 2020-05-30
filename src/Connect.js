/** Connect: Component that renders connect page.
 *
 * Props: (none)
 *
 * State: (none)
 *
 * Children: ParagraphCard components
 */


import React from 'react';
import './Connect.css';
import ParagraphCard from './ParagraphCard';

function Connect() {

  const headline = "CONNECT";
  const paragraphs = [
    <span className="Connect-name">Sarah J. Brooks</span>
  ];

  return (
    <div className="Connect">
      <ParagraphCard className="Project-ParagraphCard" headline={headline} paragraphs={paragraphs} />
      <div className="Connect-logo-container">
        <a href="mailto:sjbrooks305@gmail.com"><i className="fas fa-envelope-square"></i></a>
        <a href="https://www.linkedin.com/in/sarahjbrooks/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/sjbrooks"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
}

export default Connect;
