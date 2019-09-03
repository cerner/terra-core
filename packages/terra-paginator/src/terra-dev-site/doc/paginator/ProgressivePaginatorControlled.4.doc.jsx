import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ControlledProgressiveREADME.md';

import { name, version } from '../../../../package.json';

// Example Files
import ControlledProgressivePaginatorPropsTable from '!terra-props-table-loader!../../../../src/ControlledProgressivePaginator';
import ControlledProgressivePaginatorSrc from '!raw-loader!../../../../src/ControlledProgressivePaginator';
import ControlledProgressivePaginatorExample from './example/ControlledProgressivePaginatorExample';
import ControlledProgressivePaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/ControlledProgressivePaginatorExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Controlled Progressive Paginator Example',
        example: <ControlledProgressivePaginatorExample />,
        source: ControlledProgressivePaginatorExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Controlled Progressive Paginator',
        componentSrc: ControlledProgressivePaginatorSrc,
        componentProps: ControlledProgressivePaginatorPropsTable,
      },
    ]}
  />
);

export default DocPage;
