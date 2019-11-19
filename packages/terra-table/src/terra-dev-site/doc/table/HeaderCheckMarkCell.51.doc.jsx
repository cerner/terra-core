import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/HeaderCheckMarkCell.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderCheckMarkCellSrc from '!raw-loader!../../../../src/subcomponents/HeaderCheckMarkCell';
import HeaderCheckMarkCellPropsTable from '!terra-props-table-loader!../../../../src/subcomponents/HeaderCheckMarkCell';

import HeaderCheckMarkCellExample from '../example/HeaderCheckMarkCellExample';
import HeaderCheckMarkCellExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderCheckMarkCellExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header Check Mark Cell',
        example: <HeaderCheckMarkCellExample />,
        source: HeaderCheckMarkCellExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'HeaderCheckMarkCell',
        componentSrc: HeaderCheckMarkCellSrc,
        componentProps: HeaderCheckMarkCellPropsTable,
      },
    ]}
  />
);

export default DocPage;
