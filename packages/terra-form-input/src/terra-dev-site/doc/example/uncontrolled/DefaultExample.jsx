import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Input from 'terra-form-input';

const DefaultExample = () => (
  <div>
    <h4>Default</h4>
    <Input
      name="default input"
      defaultValue="Default Input – Uncontrolled"
    />
  </div>
);

export default DefaultExample;
