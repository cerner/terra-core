import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
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
    propsTablesMarkdown={[LoadingOverlayPropsTable, OverlayPropsTable, OverlayContainerPropsTable]}
  />
);

export default DocPage;
