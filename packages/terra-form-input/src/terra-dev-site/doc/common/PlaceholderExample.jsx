import React from 'react';
import Field from 'terra-form-field';
import Input from '../../../Input';

const PlaceholderExample = () => (
  <div>
    <Field label="Placeholder Text" htmlFor="placeholder">
      <Input name="default placeholder input" placeholder="Placeholder Text" id="placeholder" ariaLabel="form-input-label" />
    </Field>
  </div>
);

export default PlaceholderExample;
