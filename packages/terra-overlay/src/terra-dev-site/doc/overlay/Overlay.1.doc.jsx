import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import LoadingOverlayPropsTable from '!terra-props-table-loader!../../../../src/LoadingOverlay';
import LoadingOverlaySrc from '!raw-loader!../../../../src/LoadingOverlay';
import OverlayPropsTable from '!terra-props-table-loader!../../../../src/Overlay';
import OverlaySrc from '!raw-loader!../../../../src/Overlay';
import OverlayContainerPropsTable from '!terra-props-table-loader!../../../../src/OverlayContainer';
import OverlayContainerSrc from '!raw-loader!../../../../src/OverlayContainer';
import OverlayExample from '../example/OverlayExample';
import OverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OverlayExample';
import LoadingOverlayExample from '../example/LoadingOverlayExample';
import LoadingOverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LoadingOverlayExample';

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
        componentName: 'Overlay',
        componentSrc: OverlaySrc,
        componentProps: OverlayPropsTable,
      },
      {
        componentName: 'Overlay Container',
        componentSrc: OverlayContainerSrc,
        componentProps: OverlayContainerPropsTable,
      },
      {
        componentName: 'Loading Overlay',
        componentSrc: LoadingOverlaySrc,
        componentProps: LoadingOverlayPropsTable,
      },
    ]}
  />
);

export default DocPage;
