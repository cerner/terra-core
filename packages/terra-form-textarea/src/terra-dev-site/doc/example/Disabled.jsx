import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const DisabledExample = () => (
  <Field label="Disabled Textarea" htmlFor="disabled">
    <Textarea
      disabled
      size="small"
      value="I'm disabled."
      id="disabled"
      label="text-area-label"
    />
  </Field>
);

export default DisabledExample;
