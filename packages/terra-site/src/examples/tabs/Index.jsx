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
import TabsTemplate from './examples/TabsTemplate';

const TabsExamples = () => (
  <div style={{ backgroundColor: 'lightblue' }}>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} componentName="Tabs" />
    <PropsTable id="pane-props" src={PaneSrc} componentName="Tabs.Pane" />
    <h2>Modular Tabs</h2>
    <h3>Compact - Left Aligned</h3>
    <TabsTemplate variant="modular-left-aligned" />
    <h3>Compact - Centered</h3>
    <TabsTemplate variant="modular-centered" />
    <h3>Expanded</h3>
    <TabsTemplate tabFill />
    <h2>Structural Tabs</h2>
    <h3>Compact</h3>
    <TabsTemplate variant="structural" />
    <h3>Expanded</h3>
    <TabsTemplate variant="structural" tabFill />
  </div>
);

export default TabsExamples;
