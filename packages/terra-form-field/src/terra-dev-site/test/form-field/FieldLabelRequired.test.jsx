import React from 'react';
import Field from '../../../Field';

const FieldLabelRequired = () => (
  <div>
    <h3>Field - Label + Required</h3>
    <Field
      id="label-required"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelRequired;
