import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectableRows.md';

import { name, version } from '../../../../package.json';

// Example Files
import MultiSelectableRowsPropsTable from '!terra-props-table-loader!../../../../src/MultiSelectableRows';
import MultiSelectableRowsSrc from '!raw-loader!../../../../src/MultiSelectableRows';
import MultipleRowSelectableTableExamples from '../example/MultiSelectableRows';
import MultipleRowSelectableTableExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRows';
import MultipleRowMaxSelectableExample from '../example/MultiSelectableRowsMaxSelectable';
import MultipleRowMaxSelectableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsMaxSelectable';
import MultipleSelectableRowsWithSubheader from '../example/MultiSelectableRowsWithSubheader';
import MultipleSelectableRowsWithSubheaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsWithSubheader';
import MultiSelectableRowsOnChange from '../example/MultiSelectableRowsOnChange';
import MultiSelectableRowsOnChangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsOnChange';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Multiple Selectable Rows',
        example: <MultipleRowSelectableTableExamples />,
        source: MultipleRowSelectableTableExamplesSrc,
      },
      {
        title: 'Multiple Selectable Rows (Max selectable: 2)',
        example: <MultipleRowMaxSelectableExample />,
        source: MultipleRowMaxSelectableExampleSrc,
      },
      {
        title: 'Multiple Selectable Rows (Includes Subheaders)',
        example: <MultipleSelectableRowsWithSubheader />,
        source: MultipleSelectableRowsWithSubheaderSrc,
      },
      {
        title: 'Multiple Selectable Rows (onChange callback)',
        example: <MultiSelectableRowsOnChange />,
        source: MultiSelectableRowsOnChangeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Multiple Selectable Rows',
        componentSrc: MultiSelectableRowsSrc,
        componentProps: MultiSelectableRowsPropsTable,
      },
    ]}
  />
);

export default DocPage;
