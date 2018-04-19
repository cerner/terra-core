import React from 'react';

import InputField from '../../lib/InputField';

const InputFieldExample = () => (
  <InputField
    defaultValue="Value"
    error="Text"
    help="Help"
    hideRequired
    inputAttrs={{
      name: 'test',
      type: 'number',
    }}
    inputId="test"
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
