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

const TabsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} componentName="Tabs" />
    <PropsTable id="pane-props" src={PaneSrc} componentName="Tabs.Pane" />
  </div>
);

export default TabsExamples;
