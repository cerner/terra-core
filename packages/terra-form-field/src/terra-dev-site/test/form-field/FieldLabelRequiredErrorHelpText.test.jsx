import React from 'react';
import Field from '../../../Field';

const FieldLabelRequiredErrorHelpText = () => (
  <div>
    <h3>Field -  Label + Required + In Error + Help Text</h3>
    <Field
      id="required-invalid"
      style={{ border: 'dashed 1px lightGrey', padding: '10px' }}
      label="Field Label"
      help="Help Message"
      error="Error Message"
      isInvalid
      required
    >
      <div style={{ border: 'dashed 1px lightGrey' }}>Control Placeholder</div>
    </Field>
  </div>
);

export default FieldLabelRequiredErrorHelpText;
