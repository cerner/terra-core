import React from 'react';
import Input from 'terra-form-input';

const DisabledInvalidExample = () => (
  <Input
    disabled
    defaultValue="Disabled Error Example input – Uncontrolled"
    name="disabled input"
    id="uncontrolled-disabled-invalid"
    isInvalid
  />
);

export default DisabledInvalidExample;
