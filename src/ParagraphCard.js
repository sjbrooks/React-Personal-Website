/** ParagraphCard: Presentational component that renders a card with a formatted headline and paragraph.
 *
 * Props:
 * - headline: headline of the paragraph
 * - text: paragraph text
 *
 * State: (none)
 * 
 * Parents: Used in Home, About, Projects, Connect components
 */


import React from 'react';
import './ParagraphCard.css';


function ParagraphCard({ headline, paragraphs }) {

  let text = paragraphs.map((p, idx) => <p key={idx}>{p}</p>)

  return (
    <div className="ParagraphCard">
      <h1>{headline}</h1>
      <div className="ParagraphCard-text">
        {text}
      </div>
    </div>
  );
}

export default ParagraphCard;
