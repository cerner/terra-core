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
import TabsWithFilledContent from './examples/TabsWithFilledContent';
import IconOnlyTabs from './examples/IconOnlyTabs';

const TabsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} componentName="Tabs" />
    <PropsTable id="pane-props" src={PaneSrc} componentName="Tabs.Pane" />
    <div style={{ backgroundColor: 'lightgrey' }}>
      <h3>Compact</h3>
      <TabsTemplate />
      <h3>Expanded</h3>
      <TabsTemplate tabFill />
      <h3>Icon Only</h3>
      <IconOnlyTabs />
      <h3>Fill Parent Container</h3>
      <TabsWithFilledContent fill />
    </div>
  </div>
);

export default TabsExamples;
