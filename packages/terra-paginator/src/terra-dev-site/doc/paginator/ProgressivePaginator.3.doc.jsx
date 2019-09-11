import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ProgressiveREADME.md';

import { name, version } from '../../../../package.json';

// Example Files
import ProgressivePaginatorPropsTable from '!terra-props-table-loader!../../../../src/ProgressivePaginator';
import ProgressivePaginatorSrc from '!raw-loader!../../../../src/ProgressivePaginator';
import ProgressivePaginatorExample from '../example/ProgressivePaginatorExample';
import ProgressivePaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressivePaginatorExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        componentSrc: ProgressivePaginatorSrc,
        componentProps: ProgressivePaginatorPropsTable,
      },
    ]}
  />
);

export default DocPage;
