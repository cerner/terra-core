import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Row.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import RowSrc from '../../../subcomponents/_Row';
import RowPropsTable from '../../../subcomponents/_Row';

import RowExample from '../../example/RowExample';
import RowExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RowExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <RowExample />,
        source: RowExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Row',
        componentSrc: RowSrc,
        componentProps: RowPropsTable,
      },
    ]}
  />
);

export default DocPage;
