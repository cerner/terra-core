import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Component Source
import OverlayContainerSrc from '!raw-loader!../../../../src/OverlayContainer';
import OverlaySrc from '!raw-loader!../../../../src/Overlay';
import LoadingOverlaySrc from '!raw-loader!../../../../src/LoadingOverlay';

// Example Files
import OverlayExample from '../example/OverlayExample';
import OverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OverlayExample';
import LoadingOverlayExample from '../example/LoadingOverlayExample';
import LoadingOverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LoadingOverlayExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
