import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import PaginatorPropsTable from '!terra-props-table-loader!../../../../src/Paginator';
import PaginatorSrc from '!raw-loader!../../../../src/Paginator';
import PaginatorExample from '../example/PaginatorExample';
import PaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorExample';
import PaginatorNoPagesExample from '../example/PaginatorNoPagesExample';
import PaginatorNoPagesExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorNoPagesExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Paginator Example',
        example: <PaginatorExample />,
        source: PaginatorExampleSrc,
      },
      {
        title: 'Paginator Example Without Pages',
        example: <PaginatorNoPagesExample />,
        source: PaginatorNoPagesExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Paginator',
        componentSrc: PaginatorSrc,
        componentProps: PaginatorPropsTable,
      },
    ]}
  />
);

export default DocPage;
