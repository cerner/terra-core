/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-slide-group/docs/README.md';
import { version } from 'terra-slide-group/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SlideGroupSrc from '!raw-loader!terra-slide-group/src/SlideGroup.jsx';

// Example Files
import SlideGroupDemo from './SlideGroupDemo';

const SlideGroupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-slideGroup" src={SlideGroupSrc} />
    <h2 id="slideGroup">Non-Animated SlideGroup</h2>
    <br />
    <SlideGroupDemo />
    <br />
    <h2 id="slideGroup-animated">Animated SlideGroup</h2>
    <br />
    <SlideGroupDemo isAnimated />
  </div>
);

export default SlideGroupExamples;
