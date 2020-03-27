import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const FixedMediumSizeExample = () => (
  <Field label="Fixed Textarea - Medium Size" htmlFor="medium">
    <Textarea
      size="medium"
      id="medium"
      disableResize
    />
  </Field>
);

export default FixedMediumSizeExample;
