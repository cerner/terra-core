import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const DefaultTextArea = () => (
  <Field label="Default Textarea">
    <Textarea
      size="small"
      id="default"
      ariaLabel="Default Textarea"
    />
  </Field>
);

export default DefaultTextArea;
