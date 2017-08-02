import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/TextareaField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextareaFieldSrc from '!raw-loader!terra-form/src/TextareaField';

// Example Files
import TextareaFieldExamples from '../examples/TextareaField';

const TextareaFieldIndex = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextareaFieldSrc} />
    <TextareaFieldExamples />
  </div>
);

export default TextareaFieldIndex;
