import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/Field.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FieldSrc from '!raw-loader!terra-form/src/Field';

// Example Files
import FieldExamples from '../examples/Field';

const FieldIndex = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FieldSrc} />
    <FieldExamples />
  </div>
);

export default FieldIndex;
