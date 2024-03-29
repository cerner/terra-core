import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';

export default () => (
  <p>
    No Screen Reader text is added on this page, and should be blank other than this line.
    <VisuallyHiddenText />
  </p>
);
