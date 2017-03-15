/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ResponsiveElementSrc from '!raw-loader!../src/ResponsiveElement.jsx';

const ResponsiveElementExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ResponsiveElementSrc} />
  </div>
);

export default ResponsiveElementExamples;
