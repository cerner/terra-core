import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import './colors.css';

const TextVariations = () => (
  <div>
    <Text fontSize={18} className="neutral" isItalic>
Text with color set to
      <code>rgb(46,125,50)</code>
      {' '}
and
      <code>isItalic</code>
    </Text>
    <br />
    <Text fontSize={24} weight={200}>
Text with font-size set to
      <code>24</code>
      {' '}
and weight set to
      <code>200</code>
    </Text>
  </div>
);

export default TextVariations;
