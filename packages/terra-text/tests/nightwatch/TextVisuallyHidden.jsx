import React from 'react';

import Text from '../../lib/Text';

const TextVisuallyHidden = () => (
  <div>
    <span>Text below is visually hidden but available to screen readers</span>
    <Text isVisuallyHidden>Visually Hidden</Text>
  </div>
);

export default TextVisuallyHidden;
