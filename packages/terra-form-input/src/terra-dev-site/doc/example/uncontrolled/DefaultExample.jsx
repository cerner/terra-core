import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const DefaultExample = () => (
  <div>
    <Field label="Default">
      <Input
        name="default input"
        defaultValue="Default Input – Uncontrolled"
        ariaLabel="Default"
      />
    </Field>
  </div>
);

export default DefaultExample;
