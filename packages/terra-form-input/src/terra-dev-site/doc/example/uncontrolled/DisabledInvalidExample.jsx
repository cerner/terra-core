import React from 'react';

import Input from 'terra-form-input';

const DisabledInvalidExample = () => (
  <div>
    <h4>Disabled</h4>
    <Input
      disabled
      defaultValue="Disabled Error Example input – Uncontrolled"
      name="disabled input"
      isInvalid
    />
  </div>
);

export default DisabledInvalidExample;
