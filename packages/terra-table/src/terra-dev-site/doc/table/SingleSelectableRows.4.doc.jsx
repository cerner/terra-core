import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectableRows.md';
import { name, version } from '../../../../package.json';

import SingleRowSelectableTable from '../example/SingleRowSelectableTable';
import SingleRowSelectableTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleRowSelectableTable';
import TableWithNonSelectableRow from '../example/TableWithNonSelectableRow';
import TableWithNonSelectableRowSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableWithNonSelectableRow';
import SingleSelectableRowsOnChange from '../example/SingleSelectableRowsOnChange';
import SingleSelectableRowsOnChangeAdditionalDetails from '../example/SingleSelectableRowsOnChangeAdditionalDetails';
import SingleSelectableRowsOnChangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelectableRowsOnChange';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Single Selectable Rows (additional details from onChange)',
        example: <SingleSelectableRowsOnChangeAdditionalDetails />,
        source: SingleSelectableRowsOnChangeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
  />
);

export default DocPage;
