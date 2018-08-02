import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectableRows.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SingleSelectableRowsSrc from '!raw-loader!../../../../src/SingleSelectableRows';

import SingleRowSelectableTable from '../example/SingleRowSelectableTable';
import SingleRowSelectableTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleRowSelectableTable';
import TableWithNonSelectableRow from '../example/TableWithNonSelectableRow';
import TableWithNonSelectableRowSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithNonSelectableRow';
import SingleSelectableRowsOnChange from '../example/SingleSelectableRowsOnChange';
import SingleSelectableRowsOnChangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelectableRowsOnChange';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Single Selectable Rows',
        example: <SingleRowSelectableTable />,
        source: SingleRowSelectableTableSrc,
      },
      {
        title: 'Single Selectable Rows (Second row unselectable)',
        example: <TableWithNonSelectableRow />,
        source: TableWithNonSelectableRowSrc,
      },
      {
        title: 'Single Selectable Rows (onChange callback)',
        example: <SingleSelectableRowsOnChange />,
        source: SingleSelectableRowsOnChangeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Single Selectable Rows',
        componentSrc: SingleSelectableRowsSrc,
      },
    ]}
  />
);

export default DocPage;
