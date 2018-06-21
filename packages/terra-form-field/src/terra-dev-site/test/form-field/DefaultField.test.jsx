import React from 'react';
import Field from '../../../Field';

const DefaultField = () => (
  <div>
    <h3>Default Field</h3>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
    <Field
      label="Field Label"
      help="This is a standard, non-required field."
      error="Error Message"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default DefaultField;
