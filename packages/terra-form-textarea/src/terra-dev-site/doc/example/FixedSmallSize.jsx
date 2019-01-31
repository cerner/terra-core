import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const FixedSmallSizeExample = () => (
  <Field label="Fixed Textarea - Small Size" htmlFor="small">
    <Textarea
      size="small"
      style={{ resize: 'none' }}
      id="small"
    />
  </Field>
);

export default FixedSmallSizeExample;
