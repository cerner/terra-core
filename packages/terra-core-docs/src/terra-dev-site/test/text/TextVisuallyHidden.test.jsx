import React from 'react';
import Text from 'terra-text';

const TextVisuallyHidden = () => (
  <div>
    <span>Text below is visually hidden but available to screen readers</span>
    <Text id="textVisuallyHidden" isVisuallyHidden>Visually Hidden</Text>
  </div>
);

export default TextVisuallyHidden;
