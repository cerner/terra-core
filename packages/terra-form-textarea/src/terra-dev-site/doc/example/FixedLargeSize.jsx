import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const FixedLargeSizeExample = () => (
  <Field label="Fixed Textarea - Large Size" htmlFor="large">
    <Textarea
      size="large"
      id="large"
    />
  </Field>
);

export default FixedLargeSizeExample;
