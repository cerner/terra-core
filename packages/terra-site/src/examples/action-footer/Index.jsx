/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from 'terra-action-footer/docs/README.md';
import { version } from 'terra-action-footer/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ActionFooterSrc from '!raw-loader!terra-action-footer/src/ActionFooter';

// Example Files
import EmptyExample from './examples/action-footer/Empty';
import SingleStartActionExample from './examples/action-footer/SingleStartAction';
import SingleEndActionExample from './examples/action-footer/SingleEndAction';
import MultipleStartEndActionsExample from './examples/action-footer/MultipleStartEndActions';

export default () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ActionFooterSrc} />
    <h2 id="empty">Empty</h2>
    <EmptyExample />
    <h2 id="single-start-action">Single Start Action</h2>
    <SingleStartActionExample />
    <h2 id="single-end-action">Single End Action</h2>
    <SingleEndActionExample />
    <h2 id="multiple-start-end-actions">Multiple Start and End Actions</h2>
    <MultipleStartEndActionsExample />
  </div>
);
