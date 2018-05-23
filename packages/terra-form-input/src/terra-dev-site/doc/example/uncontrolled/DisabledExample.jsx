import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
