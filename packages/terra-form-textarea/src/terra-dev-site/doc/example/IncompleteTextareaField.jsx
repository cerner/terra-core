import React from 'react';
import TextareaField from '../../../TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="requiredTextarea"
    label="Incomplete Textarea"
    help="Note: This is help text"
    required
    isIncomplete
    inputAttrs={{
      name: 'requiredTextarea',
      placeholder: 'Textarea placeholder',
    }}
  />
);

export default DefaultTextAreaField;
