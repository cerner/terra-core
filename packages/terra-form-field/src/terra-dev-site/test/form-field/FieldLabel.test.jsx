import React from 'react';
import Field from '../../../Field';

const FieldLabel = () => (
  <div>
    <h3>Field - Label</h3>
    <Field
      id="label"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabel;
