import React from 'react';
import Textarea from 'terra-form-textarea';

const DisabledExample = () => (
  <Textarea
    disabled
    size="small"
    value="I'm disabled."
    id="disabled"
  />
);

export default DisabledExample;
