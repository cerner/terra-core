import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Input from 'terra-form-input';

const DefaultInvalidExample = () => (
  <div>
    <h4>Default</h4>
    <Input
      name="default error input"
      defaultValue="Default Error Input – Uncontrolled"
      isInvalid
    />
  </div>
);

export default DefaultInvalidExample;
