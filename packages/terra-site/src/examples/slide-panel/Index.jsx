import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-slide-panel/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SlidePanelSrc from '!raw-loader!terra-slide-panel/src/SlidePanel';

// Example Files
import SlidePanelOverlay from './SlidePanelOverlay';
import SlidePanelSquish from './SlidePanelSquish';
import SlidePanelStart from './SlidePanelStart';
import SlidePanelEnd from './SlidePanelEnd';
import SlidePanelSmall from './SlidePanelSmall';
import SlidePanelLarge from './SlidePanelLarge';
import SlidePanelFullscreen from './SlidePanelFullscreen';
import SlidePanelFill from './SlidePanelFill';
import SlidePanelNoFill from './SlidePanelNoFill';
import SlidePanelDemo from './SlidePanelDemo';

const SlidePanelExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SlidePanelSrc} />
    <h2 id="stateful">Stateful Demo</h2>
    <SlidePanelDemo />
    <h2 id="overlay">Behavior - Overlay</h2>
    <SlidePanelOverlay />
    <h2 id="squish">Behavior - Squish</h2>
    <SlidePanelSquish />
    <h2 id="start">Position - Start</h2>
    <SlidePanelStart />
    <h2 id="end">Position - End</h2>
    <SlidePanelEnd />
    <h2 id="small">Size - Small</h2>
    <SlidePanelSmall />
    <h2 id="large">Size - Large</h2>
    <SlidePanelLarge />
    <h2 id="fullscreen">Fullscreen</h2>
    <SlidePanelFullscreen />
    <h2 id="fill">Fill</h2>
    <SlidePanelFill />
    <h2 id="no-fill">Fill Off</h2>
    <SlidePanelNoFill />
  </div>
);

export default SlidePanelExamples;
