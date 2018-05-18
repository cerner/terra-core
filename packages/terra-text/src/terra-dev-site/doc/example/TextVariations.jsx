import React from 'react';
import Text from 'terra-text';

const TextVariations = () => (
  <div>
    <Text fontSize={18} color="#304FFE" isItalic>Text with color set to <code>rgb(46,125,50)</code> and <code>isItalic</code></Text>
    <br />
    <Text fontSize={24} weight={200}>Text with font-size set to <code>24</code> and weight set to <code>200</code></Text>
  </div>
);

export default TextVariations;
