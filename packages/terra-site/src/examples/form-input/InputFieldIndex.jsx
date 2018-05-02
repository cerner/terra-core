import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-input/docs/InputField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FormInputFieldSrc from '!raw-loader!terra-form-input/src/InputField';

import InputField from 'terra-form-input/lib/InputField';

const PlaceholderExample = () => (
  <div>
    <h4>Input Field</h4>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FormInputFieldSrc} />
    <InputField
      label="Profile Name"
      help="Note: This can not be changed in the future"
      inputAttrs={{
        placeholder: 'Profile Name',
        name: 'profile',
        type: 'text',
      }}
    />
  </div>
);

export default PlaceholderExample;
