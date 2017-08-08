/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-overlay/docs/README.md';
import { version } from 'terra-overlay/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import OverlayContainerSrc from '!raw-loader!terra-overlay/src/OverlayContainer';
import OverlaySrc from '!raw-loader!terra-overlay/src/Overlay';
import LoadingOverlaySrc from '!raw-loader!terra-overlay/src/LoadingOverlay';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


// Example Files
import OverlayExample from './OverlayExample';
import LoadingOverlayExample from './LoadingOverlayExample';

const OverlayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-overlaycontainer" src={OverlayContainerSrc} componentName="Overlay Container" />
    <PropsTable id="props-overlay" src={OverlaySrc} componentName="Overlay" />
    <PropsTable id="props-loadingoverlay" src={LoadingOverlaySrc} componentName="Loading Overlay" />
    <h2>Overlay </h2>
    <OverlayExample />
    <h2>Loading Overlay</h2>
    <LoadingOverlayExample />
  </div>
);

export default OverlayExamples;
