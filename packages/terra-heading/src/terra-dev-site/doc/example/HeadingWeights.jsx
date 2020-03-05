import React from 'react';
import Heading from 'terra-heading';

// `weight` prop can be used to specify the weight or boldness of the `<Heading />` component. Heading components default to a `font-weight` of `700`. The `weight` prop accepts one of the following numbers:

// `200`, `400`, `700`

const HeadingWeights = () => (
  <div>
    <Heading level={3} weight={200}>Font Weight: 200</Heading>
    <Heading level={3} weight={400}>Font Weight: 400</Heading>
    <Heading level={3} weight={700}>Font Weight: 700</Heading>
  </div>
);

export default HeadingWeights;
