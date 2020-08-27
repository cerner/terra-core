import React from 'react';
import Input from 'terra-form-input';

const DisabledExample = () => (
  <Input
    disabled
    defaultValue="Disabled Example input – Uncontrolled"
    name="disabled input"
    id="uncontrolled-disabled"
  />
);

export default DisabledExample;
