/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusSrc from '!raw-loader!../src/Status.jsx';
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
