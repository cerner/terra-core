import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const FixedMediumSizeExample = () => (
  <Field label="Fixed Textarea - Medium Size" htmlFor="medium">
    <Textarea
      size="medium"
      style={{ resize: 'none' }}
      id="medium"
    />
  </Field>
);

export default FixedMediumSizeExample;
