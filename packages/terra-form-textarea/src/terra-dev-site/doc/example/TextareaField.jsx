import React from 'react';
import TextareaField from '../../../TextareaField';

const DefaultTextAreaField = () => (
  <TextareaField
    inputId="textarea"
    label="Textarea"
    help="Note: This is help text"
    placeholder="Textarea placeholder"
    inputAttrs={{
      name: 'textarea',
    }}
  />
);

export default DefaultTextAreaField;
