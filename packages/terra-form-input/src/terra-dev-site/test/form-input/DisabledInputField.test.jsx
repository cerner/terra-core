import React from 'react';
import InputField from '../../../InputField';

const DisabledInputFieldExample = () => {
  return (
      <InputField
        disabled
        inputId="test-input"
        defaultValue="Value"
        error="Text"
        help="Help"
        hideRequired
        inputAttrs={{
          name: 'test',
          type: 'text',
        }}
        label="Label Text"
        labelAttrs={{
          className: 'label',
        }}
        showOptional
        maxWidth="40%"
      />
  );
};

export default DisabledInputFieldExample;
