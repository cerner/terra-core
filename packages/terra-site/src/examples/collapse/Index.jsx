/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-collapse/docs/README.md';
import { version } from 'terra-collapse/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CollapseSrc from '!raw-loader!terra-collapse/src/Collapse';

// Example Files
import DefaultCollapse from './DefaultCollapse';
import AnimatedCollapse from './AnimatedCollapse';
import ButtonAttrsCollapse from './ButtonAttrsCollapse';
import IsInitiallyOpenCollapse from './IsInitiallyOpenCollapse';
import OpenCloseEventCollapse from './OpenCloseEventCollapse';
import OpenCloseTextCollapse from './OpenCloseTextCollapse';

const CollapseExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CollapseSrc} />
    <h2 id="default">Default Collapse</h2>
    <DefaultCollapse />
    <h2 id="animated">isAnimated Collapse</h2>
    <AnimatedCollapse />
    <h2 id="open-close-text">Open / Close Button Text Collapse</h2>
    <OpenCloseTextCollapse />
    <h2 id="is-initially-open">isInitiallyOpen Collapse</h2>
    <IsInitiallyOpenCollapse />
    <h2 id="button-attrs">
      Custom Collapse Button</h2>
    <ButtonAttrsCollapse />
    <h2 id="open-close-callbacks">OnOpen / OnClose Callback Collapse</h2>
    <OpenCloseEventCollapse />
  </div>
);

export default CollapseExamples;
