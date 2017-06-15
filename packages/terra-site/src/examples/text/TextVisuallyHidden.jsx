import React from 'react';
import Text from 'terra-text';

const TextVisuallyHidden = () => (
  <div>
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
