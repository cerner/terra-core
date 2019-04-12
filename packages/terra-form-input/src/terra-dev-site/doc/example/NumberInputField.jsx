import React from 'react';
import InputField from '../../../InputField';

const NumberInputField = () => (
  <InputField
    inputId="numeric-input"
    label="Numeric Value"
    help="Note: This can not be changed in the future"
    type="number"
    inputAttrs={{
      placeholder: 'Enter Digits',
      name: 'numeric',
    }}
  />
);

export default NumberInputField;
