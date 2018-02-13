import React from 'react';

import FormInput from 'terra-form-input/lib/FormInput';

const DefaultExample = () => (
  <div>
    <h4>Default</h4>
    <FormInput
      name="default input"
      defaultValue="Default Input – Uncontrolled"
    />
  </div>
);

export default DefaultExample;
