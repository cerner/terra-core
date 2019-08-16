import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ManagedSelectableTable.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/SelectableTableRows-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

import SingleRowSelectableTable from '../example/SingleRowSelectableTable';
import SingleRowSelectableTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleRowSelectableTable';
import SelectableRowsDisableUnselectedRows from '../example/SelectableRowsDisableUnselectedRows';
import SelectableRowsDisableUnselectedRowsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SelectableRowsDisableUnselectedRows';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Selectable Table',
        description: 'Note: Recording what item(s) are selected is an implementation detail of the consumer. This example shows a single-selectable table implementation.',
        example: <SingleRowSelectableTable />,
        source: SingleRowSelectableTableSrc,
      },
      {
        title: 'Selectable Rows (Unselected rows are disabled)',
        description: 'A listener has been added for trying to change the selection state of a row, but only enabled rows can have their selection state changed.',
        example: <SelectableRowsDisableUnselectedRows />,
        source: SelectableRowsDisableUnselectedRowsSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
