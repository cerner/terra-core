import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const DisabledInvalidExample = () => (
  <div>
    <Field label="Disabled" htmlFor="uncontrolled-disabled-invalid">
      <Input
        disabled
        defaultValue="Disabled Error Example input – Uncontrolled"
        name="disabled input"
        id="uncontrolled-disabled-invalid"
        isInvalid
      />
    </Field>
  </div>
);

export default DisabledInvalidExample;
