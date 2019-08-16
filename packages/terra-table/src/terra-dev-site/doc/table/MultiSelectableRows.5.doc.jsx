import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectableRows.md';
import PropsTable from '../../../../docs/MultiSelectableRows-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import MultipleRowSelectableTableExamples from '../example/MultiSelectableRows';
import MultipleRowSelectableTableExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRows';
import MultipleRowMaxSelectableExample from '../example/MultiSelectableRowsMaxSelectable';
import MultipleRowMaxSelectableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsMaxSelectable';
import MultipleSelectableRowsWithSubheader from '../example/MultiSelectableRowsWithSubheader';
import MultipleSelectableRowsWithSubheaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsWithSubheader';
import MultiSelectableRowsOnChange from '../example/MultiSelectableRowsOnChange';
import MultiSelectableRowsOnChangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectableRowsOnChange';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
