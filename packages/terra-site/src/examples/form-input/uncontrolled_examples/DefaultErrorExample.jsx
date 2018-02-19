import React from 'react';

import Input from 'terra-form-input';

const DefaultErrorExample = () => (
  <div>
    <h4>Default</h4>
    <Input
      name="default error input"
      defaultValue="Default Error Input – Uncontrolled"
      isInvalid
    />
  </div>
);

export default DefaultErrorExample;
