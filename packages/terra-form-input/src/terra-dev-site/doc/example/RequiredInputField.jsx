import React from 'react';
import InputField from '../../../InputField';

const RequiredInputField = () => (
  <InputField
    inputId="requiredField"
    label="Required Input Field"
    help="Note: This is help text"
    type="text"
    required
    inputAttrs={{
      name: 'requiredField',
    }}
  />
);

export default RequiredInputField;
