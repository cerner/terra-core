import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
