import React from 'react';

import TextareaField from '../../lib/TextareaField';

const TextareaFieldExample = () => (
  <TextareaField
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
    label="Label Text"
    labelAttrs={{
      className: 'label',
    }}
    onChange={() => {}}
    hideRequiredshowOptional
    value="Value"
  />
);

export default TextareaFieldExample;
