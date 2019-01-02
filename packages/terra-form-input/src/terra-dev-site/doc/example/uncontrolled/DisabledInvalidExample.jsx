import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
