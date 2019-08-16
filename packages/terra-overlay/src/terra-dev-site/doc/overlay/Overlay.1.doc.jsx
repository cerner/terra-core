import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import LoadingOverlayPropsTable from '../../../../docs/LoadingOverlay-props-table.md';
import OverlayPropsTable from '../../../../docs/Overlay-props-table.md';
import OverlayContainerPropsTable from '../../../../docs/OverlayContainer-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import OverlayExample from '../example/OverlayExample';
import OverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OverlayExample';
import LoadingOverlayExample from '../example/LoadingOverlayExample';
import LoadingOverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LoadingOverlayExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
