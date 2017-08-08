/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-toggle-button/docs/README.md';
import { version } from 'terra-toggle-button/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ToggleButtonSrc from '!raw-loader!terra-toggle-button/src/ToggleButton';

// Example Files
import DefaultToggleButton from './DefaultToggleButton';
import AnimatedToggleButton from './AnimatedToggleButton';
import ButtonAttrsToggleButton from './ButtonAttrsToggleButton';
import IsInitiallyOpenToggleButton from './IsInitiallyOpenToggleButton';
import IsIconOnlyToggleButton from './IsIconOnlyToggleButton';
import OpenCloseEventToggleButton from './OpenCloseEventToggleButton';
import OpenCloseTextToggleButton from './OpenCloseTextToggleButton';

const ToggleButtonExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ToggleButtonSrc} />
    <h2 id="default">Default ToggleButton</h2>
    <DefaultToggleButton />
    <br />
    <h2 id="animated">isAnimated ToggleButton</h2>
    <AnimatedToggleButton />
    <br />
    <h2 id="open-close-text">Open / Close Button Text ToggleButton</h2>
    <OpenCloseTextToggleButton />
    <br />
    <h2 id="is-icon-only">isIconOnly ToggleButton</h2>
    <IsIconOnlyToggleButton />
    <br />
    <h2 id="is-initially-open">isInitiallyOpen ToggleButton</h2>
    <IsInitiallyOpenToggleButton />
    <br />
    <h2 id="button-attrs">Custom ToggleButton Button</h2>
    <ButtonAttrsToggleButton />
    <br />
    <h2 id="open-close-callbacks">OnOpen / OnClose Callback ToggleButton</h2>
    <OpenCloseEventToggleButton />
  </div>
);

export default ToggleButtonExamples;
