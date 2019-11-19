import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CheckMarkCell.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import CheckMarkCellSrc from '!raw-loader!../../../../src/subcomponents/CheckMarkCell';
import CheckMarkCellPropsTable from '!terra-props-table-loader!../../../../src/subcomponents/CheckMarkCell';

import CheckMarkCellExample from '../example/CheckMarkCellExample';
import CheckMarkCellExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CheckMarkCellExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Check Mark Cell',
        example: <CheckMarkCellExample />,
        source: CheckMarkCellExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'CheckMarkCell',
        componentSrc: CheckMarkCellSrc,
        componentProps: CheckMarkCellPropsTable,
      },
    ]}
  />
);

export default DocPage;
