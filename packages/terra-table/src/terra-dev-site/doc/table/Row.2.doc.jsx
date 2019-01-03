import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableRow.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableRowSrc from '!raw-loader!../../../../src/TableRow';

// import DefaultTable from '../example/DefaultTable';
// import DefaultTableSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      // {
      //   title: 'Default Table',
      //   example: <DefaultTable />,
      //   source: DefaultTableSrc,
      // },
    ]}
    propsTables={[
      {
        componentName: 'TableRow',
        componentSrc: TableRowSrc,
      },
    ]}
  />
);

export default DocPage;
