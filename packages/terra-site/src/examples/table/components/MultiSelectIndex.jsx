import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-table/docs/MultiSelectableRows.md';
import { version } from 'terra-table/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MultiSelectSrc from '!raw-loader!terra-table/src/MultiSelectableRows';

// Example Files
import MultipleRowSelectableTableExamples from '../examples/MultiSelectableRows';
import MultipleRowMaxSelectableExample from '../examples/MultiSelectableRowsMaxSelectable';
import MultipleSelectableRowsWithSubheader from '../examples/MultiSelectableRowsWithSubheader';

const MultiSelectIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={MultiSelectSrc} />
    <h2>Examples</h2>
    <h3>Multiple Selectable Rows</h3>
    <MultipleRowSelectableTableExamples />
    <h3>Multiple Selectable Rows (Max Selectable: 2)</h3>
    <MultipleRowMaxSelectableExample />
    <h3>Multiple Selectable Rows (Includes Subheaders)</h3>
    <MultipleSelectableRowsWithSubheader />
  </div>
);

export default MultiSelectIndex;
