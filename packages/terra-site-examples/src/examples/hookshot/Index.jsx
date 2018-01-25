/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-hookshot/docs/README.md';
import { version } from 'terra-hookshot/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import HookshotSrc from '!raw-loader!terra-hookshot/src/Hookshot';
import HookshotContentSrc from '!raw-loader!terra-hookshot/src/HookshotContent';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


// Example Files
import HookshotExample from './HookshotExample';
import BoundedHookshotExample from './BoundedHookshotExample';

const HookshotExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-hookshot" src={HookshotSrc} componentName="Hookshot" />
    <PropsTable id="props-hookshot-content" src={HookshotContentSrc} componentName="Hookshot Content" />
    <h2>Window Bound Hookshot</h2>
    <HookshotExample />
    <br />
    <h2>Container Bound Hookshot</h2>
    <BoundedHookshotExample />
  </div>
);

export default HookshotExamples;
