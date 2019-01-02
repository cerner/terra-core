import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

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
