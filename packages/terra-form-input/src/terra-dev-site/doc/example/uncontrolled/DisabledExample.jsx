import React from 'react';
import Input from 'terra-form-input';

const DisabledExample = () => (
  <div>
    <Input
      disabled
      defaultValue="Disabled Example input – Uncontrolled"
      name="disabled input"
      id="uncontrolled-disabled"
    />
  </div>
);

export default DisabledExample;
