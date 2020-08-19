import React from 'react';
import Input from 'terra-form-input';

const DefaultInvalidExample = () => (
  <Input
    name="default error input"
    id="uncontrolled-default-invalid"
    defaultValue="Default Error Input – Uncontrolled"
    isInvalid
  />
);

export default DefaultInvalidExample;
