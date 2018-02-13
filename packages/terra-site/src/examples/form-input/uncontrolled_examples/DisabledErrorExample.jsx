import React from 'react';

import FormInput from 'terra-form-input/lib/FormInput';

const DisabledErrorExample = () => (
  <div>
    <h4>Disabled</h4>
    <FormInput
      disabled
      defaultValue="Disabled Error Example input – Uncontrolled"
      name="disabled input"
      isInvalid
    />
  </div>
);

export default DisabledErrorExample;
