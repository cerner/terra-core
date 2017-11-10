/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-tabs/docs/README.md';
import { version } from 'terra-tabs/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import TabsSrc from '!raw-loader!terra-tabs/src/Tabs';
import PaneSrc from '!raw-loader!terra-tabs/src/TabPane';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import StructuralTabs from './examples/StructuralTabs';
import ModularTabs from './examples/ModularTabs';
import SelectableTabs from './examples/SelectableTabs';
import ExpandedTabs from './examples/ExpandedTabs';

const TabsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} componentName="Tabs" />
    <PropsTable id="tab-props" src={PaneSrc} componentName="Tabs.Pane" />
    <h2>Modular Tabs</h2>
    <ModularTabs />
    <h2>Structural Tabs</h2>
    <StructuralTabs />
    <h2>Controlled Tabs</h2>
    <SelectableTabs />
    <h2>Expanded Tabs</h2>
    <ExpandedTabs />
  </div>
);

export default TabsExamples;
