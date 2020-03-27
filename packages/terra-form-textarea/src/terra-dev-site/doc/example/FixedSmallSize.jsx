import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const FixedSmallSizeExample = () => (
  <Field label="Fixed Textarea - Small Size" htmlFor="small">
    <Textarea
      size="small"
      id="small"
      disableResize
    />
  </Field>
);

export default FixedSmallSizeExample;
