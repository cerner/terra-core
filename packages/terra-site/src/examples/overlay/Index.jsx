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
    <PropsTable id="props-overlay" src={OverlaySrc} component="Overlay" />
    <PropsTable id="props-overlaycontainer" src={OverlayContainerSrc} component="Overlay Container" />
    <PropsTable id="props-loadingoverlay" src={LoadingOverlaySrc} component="Loading Overlay" />
    <OverlayExample />
    <LoadingOverlayExample />
  </div>
);

export default OverlayExamples;
