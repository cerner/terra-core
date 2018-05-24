import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ProgressiveREADME.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import PaginatorSrc from '!raw-loader!../../../../src/ProgressivePaginator';

// Example Files
import ProgressivePaginatorExample from './example/ProgressivePaginatorExample';
import ProgressivePaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/ProgressivePaginatorExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Progressive Paginator Example',
        example: <ProgressivePaginatorExample />,
        source: ProgressivePaginatorExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Progressive Paginator',
        componentSrc: PaginatorSrc,
      },
    ]}
  />
);

export default DocPage;
