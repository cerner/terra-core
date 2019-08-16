import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const DefaultExample = () => (
  <div>
    <Field label="Default" htmlFor="uncontrolled-default">
      <Input
        name="default input"
        id="uncontrolled-default"
        defaultValue="Default Input – Uncontrolled"
      />
    </Field>
  </div>
);

export default DefaultExample;
