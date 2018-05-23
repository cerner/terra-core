import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
