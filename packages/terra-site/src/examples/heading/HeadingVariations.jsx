import React from 'react';
import Heading from 'terra-heading';

const HeadingVariations = () => (
  <div>
    <Heading level={3} color="#304FFE" isItalic>H3 heading with color set to <code>rgb(46,125,50)</code> and <code>isItalic</code></Heading>
    <br />
    <Heading level={3} size="huge" weight={200}>H3 heading with size set to <code>huge</code> and weight set to <code>200</code></Heading>
  </div>
);

export default HeadingVariations;
