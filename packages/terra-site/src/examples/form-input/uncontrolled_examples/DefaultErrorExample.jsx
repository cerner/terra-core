import React from 'react';

import FormInput from 'terra-form-input/lib/Input';

const DefaultErrorExample = () => (
  <div>
    <h4>Default</h4>
    <FormInput
      name="default error input"
      defaultValue="Default Error Input – Uncontrolled"
      isInvalid
    />
  </div>
);

export default DefaultErrorExample;
