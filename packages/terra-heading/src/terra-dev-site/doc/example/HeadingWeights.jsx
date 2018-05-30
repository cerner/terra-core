import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';

const HeadingWeights = () => (
  <div>
    <Heading level={3} weight={200}>Font Weight: 200</Heading>
    <Heading level={3} weight={400}>Font Weight: 400</Heading>
    <Heading level={3} weight={700}>Font Weight: 700</Heading>
  </div>
);

export default HeadingWeights;
