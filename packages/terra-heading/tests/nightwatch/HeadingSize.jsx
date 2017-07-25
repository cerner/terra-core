import React from 'react';

import Heading from '../../lib/Heading';

const HeadingSize = () => (
  <div>
    <Heading id="heading-size-huge" level={1} size="huge">Huge</Heading>
    <Heading id="heading-size-large" level={1} size="large">Large</Heading>
    <Heading id="heading-size-medium" level={1} size="medium">Medium</Heading>
    <Heading id="heading-size-small" level={1} size="small">Small</Heading>
    <Heading id="heading-size-tiny" level={1} size="tiny">Tiny</Heading>
    <Heading id="heading-size-mini" level={1} size="mini">Mini</Heading>
  </div>
);

export default HeadingSize;
