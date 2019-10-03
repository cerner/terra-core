import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const DefaultIncompleteExample = () => (
  <div>
    <Field label="Default" htmlFor="uncontrolled-default-incomplete">
      <Input
        name="default incomplete input"
        id="uncontrolled-default-incomplete"
        required
        isIncomplete
        isInvalid
      />
    </Field>
  </div>
);

export default DefaultIncompleteExample;
