import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const FillContainerExample = () => (
  <Textarea
    size="full"
    defaultValue="I am full container width and height, making me non-resizable."
  />
);

export default FillContainerExample;
