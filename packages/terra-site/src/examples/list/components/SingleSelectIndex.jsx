import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/SingleSelect.md';
import { version } from 'terra-list/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SingleSelectSrc from '!raw-loader!terra-list/src/SingleSelectList';

// Example File
import SingleSelectExamples from '../examples/SingleSelect';

const SingleSelectIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SingleSelectSrc} />
    <SingleSelectExamples />
  </div>
);

export default SingleSelectIndex;
