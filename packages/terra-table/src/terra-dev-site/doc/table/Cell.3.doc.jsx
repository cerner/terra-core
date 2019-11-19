import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Cell.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import CellSrc from '!raw-loader!../../../../src/subcomponents/Cell';
import CellPropsTable from '!terra-props-table-loader!../../../../src/subcomponents/Cell';

import DefaultCell from '../example/CellExample';
import DefaultCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CellExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Cell',
        example: <DefaultCell />,
        source: DefaultCellSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Cell',
        componentSrc: CellSrc,
        componentProps: CellPropsTable,
      },
    ]}
  />
);

export default DocPage;
