import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Input from 'terra-form-input';

const DefaultInvalidExample = () => (
  <div>
    <Field label="Default" htmlFor="uncontrolled-default-invalid">
      <Input
        name="default error input"
        id="uncontrolled-default-invalid"
        defaultValue="Default Error Input – Uncontrolled"
        isInvalid
        ariaLabel="form-input-label"
      />
    </Field>
  </div>
);

export default DefaultInvalidExample;
