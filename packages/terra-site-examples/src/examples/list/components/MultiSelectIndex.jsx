import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/MultiSelect.md';
import { version } from 'terra-list/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MultiSelectSrc from '!raw-loader!terra-list/src/MultiSelectList';

// Example Files
import MultiSelectExamples from '../examples/MultiSelect';

const MultiSelectIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={MultiSelectSrc} />
    <MultiSelectExamples />
  </div>
);

export default MultiSelectIndex;
