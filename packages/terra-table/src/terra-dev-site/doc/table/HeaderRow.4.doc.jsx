import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/HeaderRow.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderRowSrc from '!raw-loader!../../../../src/HeaderRow';
import HeaderRowPropsTable from '!terra-props-table-loader!../../../../src/HeaderRow';

import HeaderRowExample from '../example/HeaderRowExample';
import HeaderRowExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderRowExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <HeaderRowExample />,
        source: HeaderRowExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'HeaderRow',
        componentSrc: HeaderRowSrc,
        componentProps: HeaderRowPropsTable,
      },
    ]}
  />
);

export default DocPage;
