import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import './colors.css';

const TextColors = () => (
  <div>
    <Text fontSize={18} className="attention">Font Color: Crimson</Text>
    <br />
    <Text fontSize={18} className="neutral">Font Color: rgb(46,125,50)</Text>
    <br />
    <Text fontSize={18} className="info">Font Color: #304FFE</Text>
  </div>
);

export default TextColors;
