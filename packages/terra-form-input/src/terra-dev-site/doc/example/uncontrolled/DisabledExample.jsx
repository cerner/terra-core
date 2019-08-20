import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const DisabledExample = () => (
  <div>
    <Field label="Disabled" htmlFor="uncontrolled-disabled">
      <Input
        disabled
        defaultValue="Disabled Example input – Uncontrolled"
        name="disabled input"
        id="uncontrolled-disabled"
      />
    </Field>
  </div>
);

export default DisabledExample;
