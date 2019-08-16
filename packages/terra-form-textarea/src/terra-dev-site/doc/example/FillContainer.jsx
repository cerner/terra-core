import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const FillContainerExample = () => (
  <Field label="Fill Container" htmlFor="fill-container">
    <Textarea
      size="full"
      defaultValue="I am full container width and height, making me non-resizable."
      id="fill-container"
    />
  </Field>
);

export default FillContainerExample;
