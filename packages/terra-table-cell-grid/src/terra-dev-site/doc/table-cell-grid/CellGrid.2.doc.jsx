import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CellGrid.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import CellGridSrc from '!raw-loader!../../../../src/CellGrid';

import CellGridExample from '../example/CellGridExample';
import CellGridExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellGridExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <CellGridExample />,
        source: CellGridExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'CellGrid',
        componentSrc: CellGridSrc,
      },
    ]}
  />
);

export default DocPage;
