import React from 'react';

import FormInput from 'terra-form-input/lib/FormInput';

const DisabledExample = () => (
  <div>
    <h4>Disabled</h4>
    <FormInput
      disabled
      defaultValue="Disabled Example input – Uncontrolled"
      name="disabled input"
    />
  </div>
);

export default DisabledExample;
