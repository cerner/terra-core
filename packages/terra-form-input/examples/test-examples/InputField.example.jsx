import React from 'react';

import InputField from '../../lib/InputField';

const InputFieldExample = () => (
  <InputField
    inputId="test-input"
    defaultValue="Value"
    error="Text"
    help="Help"
    hideRequired
    inputAttrs={{
      name: 'test',
      type: 'number',
    }}
    isInline
    isInvalid
    label="Label Test"
    labelAttrs={{
      className: 'label',
    }}
    onChange={() => {}}
    showOptional
    value="Value"
  />
);

export default InputFieldExample;
