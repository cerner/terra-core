/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-action-header/docs/README.md';
import { version } from 'terra-action-header/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ActionHeaderSrc from '!raw-loader!terra-action-header/src/ActionHeader';

// Example Files
import DefaultActionHeader from './DefaultActionHeader';
import BackActionHeader from './BackActionHeader';
import BackCloseActionHeader from './BackCloseActionHeader';
import KeepCloseActionHeader from './KeepCloseActionHeader';
import CustomButtonActionHeader from './CustomButtonActionHeader';

const ActionHeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ActionHeaderSrc} />
    <h2>Examples</h2>
    <DefaultActionHeader />
    <BackActionHeader />
    <KeepCloseActionHeader />
    <BackCloseActionHeader />
    <CustomButtonActionHeader />
  </div>
);

export default ActionHeaderExamples;
