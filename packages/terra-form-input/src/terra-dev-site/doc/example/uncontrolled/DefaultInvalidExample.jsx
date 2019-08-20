import React from 'react';
import Field from 'terra-form-field';
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
