import React from 'react';
import VisuallyHiddenText from '../../../VisuallyHiddenText';

export default () => (
  <p>
     Focus in this section to hear screen reader only text
    <VisuallyHiddenText tabIndex="0" text="This is read by a screen reader" />
  </p>
);
