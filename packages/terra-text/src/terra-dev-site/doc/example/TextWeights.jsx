import React from 'react';
import Text from 'terra-text';

// The `weight` prop can be used to specify the weight or boldness of the `<Text />` component. The `weight` prop accepts one of the following numbers:

// `200`, `300`, `400`, `700`

const TextWeights = () => (
  <div>
    <Text fontSize={18} weight={200}>Font Weight: 200</Text>
    <br />
    <Text fontSize={18} weight={300}>Font Weight: 300</Text>
    <br />
    <Text fontSize={18} weight={400}>Font Weight: 400</Text>
    <br />
    <Text fontSize={18} weight={700}>Font Weight: 700</Text>
  </div>
);

export default TextWeights;
