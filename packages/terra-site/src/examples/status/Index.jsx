import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-status/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusSrc from '!raw-loader!terra-status/src/Status';

// Example Files
import StatusDefault from './StatusDefault';
import StatusImage from './StatusImage';
import StatusIcon from './StatusIcon';
import StatusArrange from './StatusArrange';

const StatusExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={StatusSrc} />
    <h2 id="default">Status with text</h2>
    <StatusDefault />
    <h2 id="image">Status with Image</h2>
    <StatusImage />
    <h2 id="icon">Status with Icon</h2>
    <StatusIcon />
    <h2 id="arrange">Status with Arrange</h2>
    <StatusArrange />
  </div>
);

export default StatusExamples;
