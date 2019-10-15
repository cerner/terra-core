import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const InvalidWithIncompleteExample = () => (
  <div>
    <Field label="Default" htmlFor="uncontrolled-invalid-with-incomplete">
      <Input
        name="invalid wins input"
        id="uncontrolled-invalid-with-incomplete"
        required
        isIncomplete
        isInvalid
      />
    </Field>
  </div>
);

export default InvalidWithIncompleteExample;
