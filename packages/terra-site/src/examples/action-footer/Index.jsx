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
import EmptyInCardExample from './examples/action-footer/EmptyInCard';
import SingleStartActionExample from './examples/action-footer/SingleStartAction';
import SingleStartActionInCardExample from './examples/action-footer/SingleStartActionInCard';
import SingleEndActionExample from './examples/action-footer/SingleEndAction';
import SingleEndActionInCardExample from './examples/action-footer/SingleEndActionInCard';
import MultipleStartEndActionsExample from './examples/action-footer/MultipleStartEndActions';
import MultipleStartEndActionsInCardExample from './examples/action-footer/MultipleStartEndActionsInCard';

const ActionFooterExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ActionFooterSrc} />
    <h2 id="empty">Empty</h2>
    <EmptyExample />
    <h2 id="empty-in-card">Empty in Card</h2>
    <EmptyInCardExample />
    <h2 id="single-start-action">Single Start Action</h2>
    <SingleStartActionExample />
    <h2 id="single-start-action-in-card">Single Start Action in Card</h2>
    <SingleStartActionInCardExample />
    <h2 id="single-end-action">Single End Action</h2>
    <SingleEndActionExample />
    <h2 id="single-end-action-in-card">Single End Action in Card</h2>
    <SingleEndActionInCardExample />
    <h2 id="multiple-start-end-actions">Multiple Start and End Actions</h2>
    <MultipleStartEndActionsExample />
    <h2 id="multiple-start-end-actions-in-card">Multiple Start and End Actions in Card</h2>
    <MultipleStartEndActionsInCardExample />
  </div>
);

export default ActionFooterExamples;
