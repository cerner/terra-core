import React from 'react';
import Field from '../../../Field';

const FieldHiddenLabel = () => (
  <div>
    <h3>Field - Hidden Label</h3>
    <Field
      id="label-hidden"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isLabelHidden
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldHiddenLabel;
