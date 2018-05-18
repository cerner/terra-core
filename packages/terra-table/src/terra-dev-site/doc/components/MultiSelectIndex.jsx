/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-table/docs/MultiSelectableRows.md';
import { name } from 'terra-table/package.json';

// Component Source
import MultiSelectSrc from '!raw-loader!terra-table/src/MultiSelectableRows';

// Example Files
import MultipleRowSelectableTableExamples from '../examples/MultiSelectableRows';
import MultipleRowSelectableTableExamplesSrc from '!raw-loader!../examples/MultiSelectableRows';
import MultipleRowMaxSelectableExample from '../examples/MultiSelectableRowsMaxSelectable';
import MultipleRowMaxSelectableExampleSrc from '!raw-loader!../examples/MultiSelectableRowsMaxSelectable';
import MultipleSelectableRowsWithSubheader from '../examples/MultiSelectableRowsWithSubheader';
import MultipleSelectableRowsWithSubheaderSrc from '!raw-loader!../examples/MultiSelectableRowsWithSubheader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Multiple Selectable Rows',
        example: <MultipleRowSelectableTableExamples />,
        source: MultipleRowSelectableTableExamplesSrc,
      },
      {
        title: 'Multiple Selectable Rows (Max Selectable: 2)',
        example: <MultipleRowMaxSelectableExample />,
        source: MultipleRowMaxSelectableExampleSrc,
      },
      {
        title: 'Multiple Selectable Rows (Includes Subheaders)',
        example: <MultipleSelectableRowsWithSubheader />,
        source: MultipleSelectableRowsWithSubheaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Multi Select Table',
        componentSrc: MultiSelectSrc,
      },
    ]}
  />
);

export default DocPage;
