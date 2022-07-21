import React from 'react';
import './Section.scss';

const Section = ({ id, content }) => (
  <div className="section" id={id}>
    {content}
  </div>
);

export default Section;
