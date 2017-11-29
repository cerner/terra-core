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
import ModularTabs from './examples/ModularCompactLeftTabs';
import ExpandedTabs from './examples/ModularExpandedTabs';

const TabsExamples = () => (
  <div style={{ backgroundColor: 'lightblue' }}>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} componentName="Tabs" />
    <PropsTable id="pane-props" src={PaneSrc} componentName="Tabs.Pane" />
    <h2>Modular Tabs</h2>
    <h3>Compact - Left Aligned</h3>
    <ModularTabs />
    <h3>Compact - Centered</h3>
    <h3>Expanded</h3>
    <ExpandedTabs />
    <h2>Structural Tabs</h2>
    <h3>Compact</h3>
    <StructuralTabs />
    <h3>Expanded</h3>
    <StructuralTabs tabFill />
  </div>
);

export default TabsExamples;
