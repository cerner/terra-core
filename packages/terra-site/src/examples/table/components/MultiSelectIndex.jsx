import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-table/docs/MultiSelectableRows.md';
import { version } from 'terra-table/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MultiSelectSrc from '!raw-loader!terra-table/src/MultiSelectableRows';

// Example Files
import MultipleRowSelectableTableExamples from '../examples/MultipleRowSelectableTable';

const MultiSelectIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={MultiSelectSrc} />
    <MultipleRowSelectableTableExamples />
  </div>
);

export default MultiSelectIndex;
