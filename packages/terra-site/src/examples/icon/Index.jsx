import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-icon/docs/README.md';
import { version } from 'terra-icon/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import IconSrc from '!raw-loader!terra-icon/src/IconBase';

// Example Files
import IconStatic from './IconStatic';
import IconThemeable from './IconThemeable';

const IconExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={IconSrc} />
    <h2 id="static_icons">Static Icons</h2>
    <IconStatic />
    <br />
    <h2 id="themeable_icons">Themeable Icons</h2>
    <IconThemeable />
  </div>
);

export default IconExamples;
