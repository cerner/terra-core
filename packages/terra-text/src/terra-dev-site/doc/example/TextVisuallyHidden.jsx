import React from 'react';
import Text from 'terra-text';

const TextVisuallyHidden = () => (
  <div>
    <p>
      The example below includes a &apos;
      <code>&lt;Text/&gt;</code>
      &apos; component using the &apos;
      <code>isVisuallyHidden</code>
      &apos; prop.
    </p>
    Example:&nbsp;
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
