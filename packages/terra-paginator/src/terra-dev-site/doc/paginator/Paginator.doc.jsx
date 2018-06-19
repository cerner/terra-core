import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import PaginatorSrc from '!raw-loader!../../../../src/Paginator';

// Example Files
import PaginatorExample from './example/PaginatorExample';
import PaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/PaginatorExample';
import PaginatorNoPagesExample from './example/PaginatorNoPagesExample';
import PaginatorNoPagesExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/PaginatorNoPagesExample';
import PaginatorWithProps from './example/PaginatorWithProps';
import PaginatorWithPropsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/PaginatorWithProps';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
      {
        title: 'Update Paginator With Props',
        example: <PaginatorWithProps />,
        source: PaginatorWithPropsSrc,
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
