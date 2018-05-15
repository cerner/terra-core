/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-overlay/docs/README.md';
import { name } from 'terra-overlay/package.json';

// Component Source
import OverlayContainerSrc from '!raw-loader!terra-overlay/src/OverlayContainer';
import OverlaySrc from '!raw-loader!terra-overlay/src/Overlay';
import LoadingOverlaySrc from '!raw-loader!terra-overlay/src/LoadingOverlay';

// Example Files
import OverlayExample from './OverlayExample';
import OverlayExampleSrc from 'raw-loader!./OverlayExample';
import LoadingOverlayExample from './LoadingOverlayExample';
import LoadingOverlayExampleSrc from 'raw-loader!./LoadingOverlayExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Overlay',
        example: <OverlayExample />,
        source: OverlayExampleSrc,
      },
      {
        title: 'Loading Overlay',
        example: <LoadingOverlayExample />,
        source: LoadingOverlayExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Overlay Container',
        componentSrc: OverlayContainerSrc,
      },
      {
        componentName: 'Overlay',
        componentSrc: OverlaySrc,
      },
      {
        componentName: 'Loading Overlay',
        componentSrc: LoadingOverlaySrc,
      },
    ]}
  />
);

export default DocPage;
