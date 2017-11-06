/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-tab-container/docs/README.md';
import { version } from 'terra-tab-container/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import TabContainerSrc from '!raw-loader!terra-tab-container/src/TabContainer';
import TabSrc from '!raw-loader!terra-tab-container/src/Tab';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import StructuralTabContainer from './examples/StructuralTabContainer';
import ModularTabContainer from './examples/ModularTabContainer';

const TabContainerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabContainerSrc} componentName="TabContainer" />
    <h2>Modular Tabs</h2>
    <ModularTabContainer />
    <h2>Structural Tabs</h2>
    <StructuralTabContainer />
  </div>
);

export default TabContainerExamples;
