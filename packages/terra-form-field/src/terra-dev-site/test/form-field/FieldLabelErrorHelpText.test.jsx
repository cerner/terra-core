import React from 'react';
import Field from '../../../Field';

const FieldLabelErrorHelpText = () => (
  <div>
    <h3>Field - Label + In Error + Help Text</h3>
    <Field
      id="optional-invalid"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelErrorHelpText;
