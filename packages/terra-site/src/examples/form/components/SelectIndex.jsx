import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form/docs/Select.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SelectSrc from '!raw-loader!terra-form/src/Select';

// Example Files
import SelectExamples from '../examples/Select';

const SelectIndex = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SelectSrc} />
    <SelectExamples />
  </div>
);

export default SelectIndex;
