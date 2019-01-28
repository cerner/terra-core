import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';
import './colors.css';

const HeadingColors = () => (
  <div>
    <Heading level={3} className="crimson">Font Color: Crimson</Heading>
    <Heading level={3} className="green">Font Color: rgb(46,125,50)</Heading>
    <Heading level={3} className="blue">Font Color: #304FFE</Heading>
  </div>
);

export default HeadingColors;
