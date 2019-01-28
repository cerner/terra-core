import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import './colors.css';

const TextColors = () => (
  <div>
    <Text fontSize={18} className="crimson">Font Color: Crimson</Text>
    <br />
    <Text fontSize={18} className="green">Font Color: rgb(46,125,50)</Text>
    <br />
    <Text fontSize={18} className="blue">Font Color: #304FFE</Text>
  </div>
);

export default TextColors;
