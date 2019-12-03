import React from 'react';
import InputField from 'terra-form-input/lib/InputField';

const RequiredInputField = () => (
  <InputField
    inputId="incompleteField"
    label="Incomplete Input Field"
    help="Note: This is help text"
    type="text"
    required
    isIncomplete
    inputAttrs={{
      name: 'requiredField',
    }}
  />
);

export default RequiredInputField;
