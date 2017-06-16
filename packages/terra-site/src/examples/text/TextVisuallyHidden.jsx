/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Text from 'terra-text';

const TextVisuallyHidden = () => (
  <div>
    <p>The example below includes a `<Text />` component using the `isVisuallyHidden` prop.</p>
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
