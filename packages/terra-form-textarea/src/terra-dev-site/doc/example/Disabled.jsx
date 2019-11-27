import React from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const DisabledExample = () => (
  <Field label="Disabled Textarea" htmlFor="disabled">
    <Textarea
      disabled
      value="I'm disabled."
      id="disabled"
    />
  </Field>
);

export default DisabledExample;
