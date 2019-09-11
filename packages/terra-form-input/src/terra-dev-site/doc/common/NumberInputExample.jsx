import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const NumberInputExample = () => (
  <div>
    <Field label="Numeric Input" htmlFor="numeric">
      <Input name="number input" placeholder="enter digits" id="numeric" type="number" ariaLabel="Numeric Input" />
    </Field>
  </div>
);

export default NumberInputExample;
