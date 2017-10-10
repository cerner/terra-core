import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/Selectable.md';
import { version } from 'terra-list/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SelectableListSrc from '!raw-loader!terra-list/src/SelectableList';

// Example File
import SelectableListExamples from '../examples/Selectable';

const SingleSelectIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SelectableListSrc} />
    <SelectableListExamples />
  </div>
);

export default SingleSelectIndex;
