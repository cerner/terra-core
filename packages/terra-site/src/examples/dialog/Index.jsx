/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-dialog/docs/README.md';
import { version } from 'terra-dialog/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DialogSrc from '!raw-loader!terra-dialog/src/Dialog';

// Example Files
import DialogDefault from './DialogDefault';
import DialogLongContent from './DialogLongContent';
import DialogNoClose from './DialogNoClose';

const DialogExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DialogSrc} />
    <h2>Dialog - Default</h2>
    <DialogDefault />
    <h2>Dialog - Long Content</h2>
    <DialogLongContent />
    <h2>Dialog - No Close Button</h2>
    <DialogNoClose />
  </div>
);

export default DialogExamples;
