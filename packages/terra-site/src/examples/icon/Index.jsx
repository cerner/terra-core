import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-icon/docs/README.md';
import { version } from 'terra-icon/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import IconSrc from '!raw-loader!terra-icon/src/IconBase';

// Example Files
import IconAll from './IconAll';

const IconExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={IconSrc} />
    <h2 id="all_icons">All Icons</h2>
    <IconAll />
  </div>
);

export default IconExamples;
