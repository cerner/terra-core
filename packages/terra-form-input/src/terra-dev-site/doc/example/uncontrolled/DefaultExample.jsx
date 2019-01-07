import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
