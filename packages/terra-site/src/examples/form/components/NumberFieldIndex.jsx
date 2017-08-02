import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/NumberField.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NumberFieldSrc from '!raw-loader!terra-form/src/NumberField';

// Example Files
import NumberFieldExamples from '../examples/NumberField';

const NumberFieldIndex = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={NumberFieldSrc} />
    <NumberFieldExamples />
  </div>
);

export default NumberFieldIndex;
