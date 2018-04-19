import React from 'react';

import TextareaField from '../../lib/TextareaField';

const TextareaFieldExample = () => (
  <TextareaField
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
    label="Label Text"
    labelAttrs={{
      className: 'label',
    }}
    onChange={() => {}}
    showOptional
    value="Value"
  />
);

export default TextareaFieldExample;
