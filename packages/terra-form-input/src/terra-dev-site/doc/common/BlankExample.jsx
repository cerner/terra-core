import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const BlankExample = () => (
  <div>
    <Field label="Blank" htmlFor="blank">
      <Input name="default blank input" id="blank" ariaLabel="Blank" />
    </Field>
  </div>
);

export default BlankExample;
