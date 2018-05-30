import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';

const TextVisuallyHidden = () => (
  <div>
    <p>The example below includes a <code>&lt;Text /&gt;</code> component using the <code>isVisuallyHidden</code> prop.</p>
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
