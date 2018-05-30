import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';

const TextColors = () => (
  <div>
    <Text fontSize={18} color="Crimson">Font Color: Crimson</Text>
    <br />
    <Text fontSize={18} color="rgb(46,125,50)">Font Color: rgb(46,125,50)</Text>
    <br />
    <Text fontSize={18} color="#304FFE">Font Color: #304FFE</Text>
  </div>
);

export default TextColors;
