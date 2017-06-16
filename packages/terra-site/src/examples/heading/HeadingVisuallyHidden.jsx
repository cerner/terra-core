/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Heading from 'terra-heading';

const HeadingVisuallyHidden = () => (
  <div>
    <Heading level={3} isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Heading>
  </div>
);

export default HeadingVisuallyHidden;
