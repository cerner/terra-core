/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-tab-container/docs/README.md';
import { version } from 'terra-tab-container/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SelectableTabContainerSrc from '!raw-loader!terra-tab-container/src/SelectableTabContainer';

// Example Files
import SelectableTabContainer from '../examples/SelectableTabContainer';

const SelectableTabContainerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SelectableTabContainerSrc} componentName="SelectableTabContainer" />
    <h2>Example</h2>
    <SelectableTabContainer />
  </div>
);

export default SelectableTabContainerExamples;
