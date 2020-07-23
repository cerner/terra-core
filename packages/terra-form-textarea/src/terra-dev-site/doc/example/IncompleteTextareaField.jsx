import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="incompleteTextarea"
    label="Incomplete Textarea"
    help="Note: This is help text"
    required
    isIncomplete
    inputAttrs={{
      name: 'requiredTextarea',
    }}
  />
);

export default DefaultTextAreaField;
