import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Rows.md';

import { name, version } from '../../../../package.json';

import TableRowsPropsTable from '!terra-props-table-loader!../../../../src/TableRows';
import TableRowsSrc from '!raw-loader!../../../../src/TableRows';
import RowsOnClick from '../example/RowsOnClick';
import RowsOnClickSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnClick';
import RowsOnKeyDown from '../example/RowsOnKeyDown';
import RowsOnKeyDownSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnKeyDown';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Table Rows (onClick callback)',
        example: <RowsOnClick />,
        source: RowsOnClickSrc,
      },
      {
        title: 'Table Rows (onKeyDown callback)',
        description: 'Note: Requires Table Row children to be focusable.',
        example: <RowsOnKeyDown />,
        source: RowsOnKeyDownSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Table Rows',
        componentSrc: TableRowsSrc,
        componentProps: TableRowsPropsTable,
      },
    ]}
  />
);

export default DocPage;
