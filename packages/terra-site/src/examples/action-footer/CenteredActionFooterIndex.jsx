import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-action-footer/docs/CenteredActionFooter.md';
import { version } from 'terra-action-footer/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CenteredActionFooterSrc from '!raw-loader!terra-action-footer/src/CenteredActionFooter';

// Example Files
import EmptyExample from './examples/centered-action-footer/Empty';
import EmptyInCardExample from './examples/centered-action-footer/EmptyInCard';
import SingleActionExample from './examples/centered-action-footer/SingleAction';
import SingleActionInCardExample from './examples/centered-action-footer/SingleActionInCard';
import MultipleActionsExample from './examples/centered-action-footer/MultipleActions';
import MultipleActionsInCardExample from './examples/centered-action-footer/MultipleActionsInCard';

const CenteredActionFooterIndex = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CenteredActionFooterSrc} />
    <h2 id="empty">Empty</h2>
    <EmptyExample />
    <h2 id="empty-in-card">Empty in Card</h2>
    <EmptyInCardExample />
    <h2 id="single-action">Single Action</h2>
    <SingleActionExample />
    <h2 id="single-action-in-card">Single Action in Card</h2>
    <SingleActionInCardExample />
    <h2 id="multiple-actions">Multiple Actions</h2>
    <MultipleActionsExample />
    <h2 id="multiple-actions-in-card">Multiple Actions in Card</h2>
    <MultipleActionsInCardExample />
  </div>
);

export default CenteredActionFooterIndex;
