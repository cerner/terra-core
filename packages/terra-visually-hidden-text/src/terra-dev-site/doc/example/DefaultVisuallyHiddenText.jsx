import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import VisuallyHiddenText from 'terra-visually-hidden-text/lib/VisuallyHiddenText';

export default () => (
  <p>
     Focus in this section to hear screen reader only text
    <VisuallyHiddenText tabIndex="0" text="This is read by a screen reader" />
  </p>
);
