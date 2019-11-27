import React from 'react';
import InputField from 'terra-form-input/lib/InputField';

const NumberInputField = () => (
  <InputField
    inputId="numeric-input"
    label="Numeric Value"
    type="number"
    placeholder="Enter Digits"
    inputAttrs={{
      name: 'numeric',
    }}
  />
);

export default NumberInputField;
