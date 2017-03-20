/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import OverlaySrc from '!raw-loader!../src/Overlay.jsx';
import OverlayDefault from './OverlayDefault';
import OverlayWithChildren from './OverlayWithChildren';
import OverlayStyle from './OverlayStyle';
import OverlayTrapFocus from './OverlayTrapFocus';
import OverlayOnElement from './OverlayOnElement';

const OverlayExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={OverlaySrc} />
    <h2 id="default-overlay">Default Overlay</h2>
    <OverlayDefault />
    <h2 id="overlay-with-children">Overlay With Children</h2>
    <OverlayWithChildren />
    <h2 id="overlay-style">Styled Overlay</h2>
    <OverlayStyle />
    <h2 id="overlay-focus">Overlay Focus</h2>
    <OverlayTrapFocus />
    <h2 id="overlay-on-element">Overlay Focus</h2>
    <OverlayOnElement />
  </div>
);

export default OverlayExamples;
