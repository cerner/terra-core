import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableHeaderCell.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableHeaderCellSrc from '!raw-loader!../../../../src/TableHeaderCell';

import HeaderCellExample from '../example/TableHeaderCell';
import HeaderCellExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableHeaderCell';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        description: 'Sorting logic is handled by the consumer by implementing the onSelect and metaData props.',
        example: <HeaderCellExample />,
        source: HeaderCellExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableHeaderCell',
        componentSrc: TableHeaderCellSrc,
      },
    ]}
  />
);

export default DocPage;
