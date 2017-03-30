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
import IconAppendClass from './IconAppendClass';
import IconAria from './IconAria';
import IconBidi from './IconBidi';
import IconHeightWidth from './IconHeightWidth';

const IconExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={IconSrc} />
    <h2 id="all_icons">All Icons</h2>
    <IconAll />
    <h2 id="bidi_icons">Bidi Icons</h2>
    <IconBidi />
    <h2 id="height_width_icons">Icon Height and Width</h2>
    <IconHeightWidth />
    <h2 id="aria_icons">Icon Accessibility</h2>
    <IconAria />
    <h2 id="append_class_icons">Append Classes</h2>
    <IconAppendClass />
  </div>
);

export default IconExamples;
