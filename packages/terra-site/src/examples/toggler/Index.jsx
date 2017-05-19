import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggler/docs/README.md';
import { version } from 'terra-toggler/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TogglerSrc from '!raw-loader!terra-toggler/src/Toggler';

// Example Files
import TogglerDefault from './TogglerDefault';

const TogglerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-table" src={TogglerSrc} />
    <h2 id="default">Toggler Default</h2>
    <TogglerDefault />
  </div>
);

export default TogglerExamples;
