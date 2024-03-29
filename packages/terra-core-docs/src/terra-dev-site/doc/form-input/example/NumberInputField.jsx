import React from 'react';
import { InputField } from 'terra-form-input';

const NumberInputField = () => (
  <InputField
    inputId="numeric-input"
    label="Numeric Value"
    type="number"
    help="Enter Digits"
    inputAttrs={{
      name: 'numeric',
    }}
  />
);

export default NumberInputField;
