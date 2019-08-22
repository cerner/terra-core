import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/HeaderCellGrid.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderCellGridSrc from '!raw-loader!../../../../src/HeaderCellGrid';

import HeaderCellGridExample from '../example/HeaderCellGridExample';
import HeaderCellGridExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderCellGridExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <HeaderCellGridExample />,
        source: HeaderCellGridExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'HeaderCellGrid',
        componentSrc: HeaderCellGridSrc,
      },
    ]}
  />
);

export default DocPage;
