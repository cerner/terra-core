import React from 'react';

import Heading from '../../lib/Heading';

const HeadingVisuallyHidden = () => (
  <div>
    <span>Heading below is visually hidden but available to screen readers</span>
    <Heading id="heading-visually-hidden" level={1} isVisuallyHidden>Visually Hidden</Heading>
  </div>
);

export default HeadingVisuallyHidden;
