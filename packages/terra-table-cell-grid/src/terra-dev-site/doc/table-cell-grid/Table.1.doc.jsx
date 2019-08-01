import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSrc from '!raw-loader!../../../../src/TableCellGrid';

import DefaultTable from '../example/DefaultTable';
import DefaultTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultTable';
import FixedHeightTable from '../example/FixedHeightTable';
import FixedHeightTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedHeightTable';
import StripedTable from '../example/StripedTable';
import StripedTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StripedTable';
import PaddingTable from '../example/PaddingTable';
import PaddingTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaddingTable';
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
        title: 'Table with standard padding',
        example: <PaddingTable paddingStyle="standard" />,
        source: PaddingTableSrc,
      },
      {
        title: 'Table with compact padding',
        example: <PaddingTable paddingStyle="compact" />,
        source: PaddingTableSrc,
      },
      {
        title: 'Table zebra stripes',
        example: <StripedTable />,
        source: StripedTableSrc,
      },
      {
        title: 'Fill Style Table',
        example: <FixedHeightTable />,
        source: FixedHeightTableSrc,
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
