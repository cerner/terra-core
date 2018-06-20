import React from 'react';
import Field from '../../../Field';

const FieldLabelOptional = () => (
  <div>
    <h3>Field - Label + Optional</h3>
    <Field
      id="label-optional"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      showOptional
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelOptional;
