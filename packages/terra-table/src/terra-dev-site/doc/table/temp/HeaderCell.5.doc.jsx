import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/HeaderCell.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderCellSrc from '../../../../subcomponents/_HeaderCell';
import HeaderCellPropsTable from '../../../../subcomponents/_HeaderCell';

import HeaderCellExample from '../../example/HeaderCellExample';
import HeaderCellExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderCellExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <HeaderCellExample />,
        source: HeaderCellExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'HeaderCell',
        componentSrc: HeaderCellSrc,
        componentProps: HeaderCellPropsTable,
      },
    ]}
  />
);

export default DocPage;
