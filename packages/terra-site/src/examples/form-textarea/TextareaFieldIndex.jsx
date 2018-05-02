import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-textarea/docs/TextareaField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextareaFieldSrc from '!raw-loader!terra-form-textarea/src/TextareaField';

import TextareaField from 'terra-form-textarea/lib/TextareaField';

const PlaceholderExample = () => (
  <div>
    <h4>Textarea Field</h4>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextareaFieldSrc} />
    <TextareaField
      label="Profile Description"
      help="Every Profile Needs a Description"
      inputAttrs={{
        name: 'description',
        placeholder: 'Enter a profile Description',
      }}
    />
  </div>
);

export default PlaceholderExample;
