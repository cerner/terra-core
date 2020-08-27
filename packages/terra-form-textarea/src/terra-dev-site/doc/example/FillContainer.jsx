import React from 'react';
import Textarea from 'terra-form-textarea';

const FillContainerExample = () => (
  <Textarea
    size="full"
    defaultValue="I am full container width and height, making me non-resizable."
    id="fill-container"
  />
);

export default FillContainerExample;
