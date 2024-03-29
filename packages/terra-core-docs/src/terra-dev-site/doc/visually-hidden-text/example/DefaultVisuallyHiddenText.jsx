import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';

export default () => (
  <p>
    Focus in this section to hear screen reader only text
    <VisuallyHiddenText text="This is read by a screen reader" />
  </p>
);
