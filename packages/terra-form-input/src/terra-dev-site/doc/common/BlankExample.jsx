import React from 'react';
import Field from 'terra-form-field';
import Input from '../../../Input';

const BlankExample = () => (
  <div>
    <Field label="Blank" htmlFor="blank">
      <Input name="default blank input" id="blank" ariaLabel="form-input-label" />
    </Field>
  </div>
);

export default BlankExample;
