import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';

const HeadingColors = () => (
  <div>
    <Heading level={3} color="Crimson">Font Color: Crimson</Heading>
    <Heading level={3} color="rgb(46,125,50)">Font Color: rgb(46,125,50)</Heading>
    <Heading level={3} color="#304FFE">Font Color: #304FFE</Heading>
  </div>
);

export default HeadingColors;
