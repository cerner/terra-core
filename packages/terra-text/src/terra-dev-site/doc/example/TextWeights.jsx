import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';

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
