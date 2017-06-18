/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggler/docs/README.md';
import { version } from 'terra-toggler/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TogglerSrc from '!raw-loader!terra-toggler/src/Toggler';

// Example Files
import DefaultToggler from './DefaultToggler';
import ButtonToggler from './ButtonToggler';

const TogglerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TogglerSrc} />
    <DefaultToggler />
    <ButtonToggler>Another test</ButtonToggler>
    <ButtonToggler isAnimated>Another test</ButtonToggler>
    <ButtonToggler isInitiallyOpen>Another test</ButtonToggler>
    <ButtonToggler openedButtonText="View More" closedButtonText="View Less" buttonAttrs={{ variant: 'link' }}>Another test</ButtonToggler>
  </div>
);

export default TogglerExamples;
