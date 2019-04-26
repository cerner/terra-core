import React from 'react';

import TextareaField from '../../../TextareaField';

const DisabledTextareaFieldExample = () => (
  <TextareaField
    disabled
    defaultValue="Value"
    inputId="test-input"
    error="Error message."
    help="Help message."
    hideRequired
    inputAttrs={{
      name: 'test',
    }}
    label="Label Text"
    labelAttrs={{
      className: 'label',
    }}
    showOptional
  />
);

export default DisabledTextareaFieldExample;
