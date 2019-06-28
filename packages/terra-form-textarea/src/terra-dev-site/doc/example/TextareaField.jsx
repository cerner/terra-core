import React from 'react';
import TextareaField from '../../../TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="textarea"
    label="Textarea"
    help="Note: This is help text"
    inputAttrs={{
      name: 'textarea',
      placeholder: 'Textarea placeholder',
    }}
  />
);

export default DefaultTextAreaField;
