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
import SingleActionExample from './examples/centered-action-footer/SingleAction';
import MultipleActionsExample from './examples/centered-action-footer/MultipleActions';

export default () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CenteredActionFooterSrc} />
    <h2 id="empty">Empty</h2>
    <EmptyExample />
    <h2 id="single-action">Single Action</h2>
    <SingleActionExample />
    <h2 id="multiple-actions">Multiple Actions</h2>
    <MultipleActionsExample />
  </div>
);
