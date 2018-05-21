import React from 'react';
import Text from '../../../Text';

const TextVisuallyHidden = () => (
  <div>
    <p>The example below includes a <code>&lt;Text /&gt;</code> component using the <code>isVisuallyHidden</code> prop.</p>
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
