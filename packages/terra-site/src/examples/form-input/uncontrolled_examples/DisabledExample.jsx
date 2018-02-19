import React from 'react';

import Input from 'terra-form-input';

const DisabledExample = () => (
  <div>
    <h4>Disabled</h4>
    <Input
      disabled
      defaultValue="Disabled Example input – Uncontrolled"
      name="disabled input"
    />
  </div>
);

export default DisabledExample;
