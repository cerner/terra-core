import React from 'react';
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="requiredTextarea"
    label="Required Textarea"
    help="Note: This is help text"
    placeholder="Textarea placeholder"
    required
    inputAttrs={{
      name: 'requiredTextarea',
    }}
  />
);

export default DefaultTextAreaField;
