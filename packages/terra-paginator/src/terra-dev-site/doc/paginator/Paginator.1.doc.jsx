import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import PaginatorSrc from '!raw-loader!../../../../src/Paginator';

// Example Files
import PaginatorExample from '../example/PaginatorExample';
import PaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorExample';
import PaginatorNoPagesExample from '../example/PaginatorNoPagesExample';
import PaginatorNoPagesExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PaginatorNoPagesExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

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
      },
    ]}
  />
);

export default DocPage;
