import React from 'react';
import TextareaField from '../../../TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="requiredTextarea"
    label="Required Textarea"
    help="Note: This is help text"
    required
    inputAttrs={{
      name: 'requiredTextarea',
      placeholder: 'Textarea placeholder',
    }}
  />
);

export default DefaultTextAreaField;
