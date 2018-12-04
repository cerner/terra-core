import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSrc from '!raw-loader!../../../../src/Table';

import DefaultTable from '../example/DefaultTable';
import DefaultTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultTable';
import NoStripedTable from '../example/NoStripedTable';
import NoStripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoStripedTable';
import NoPaddingTable from '../example/NoPaddingTable';
import NoPaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoPaddingTable';
import TableNoRows from '../example/TableNoRows';
import TableNoRowsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableNoRows';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Table',
        example: <DefaultTable />,
        source: DefaultTableSrc,
      },
      {
        title: 'Table without padding',
        example: <NoPaddingTable />,
        source: NoPaddingTableSrc,
      },
      {
        title: 'Table without zebra stripes',
        example: <NoStripedTable />,
        source: NoStripedTableSrc,
      },
      {
        title: 'Table with no rows',
        example: <TableNoRows />,
        source: TableNoRowsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Table',
        componentSrc: TableSrc,
      },
    ]}
  />
);

export default DocPage;
