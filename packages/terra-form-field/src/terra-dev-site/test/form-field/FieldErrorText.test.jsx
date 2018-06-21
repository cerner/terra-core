import React from 'react';
import Field from '../../../Field';

const FieldErrorText = () => (
  <div>
    <h3>Field - Error Text</h3>
    <Field
      id="error-text"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      isLabelHidden
      error="Error Message"
      isInvalid
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldErrorText;
