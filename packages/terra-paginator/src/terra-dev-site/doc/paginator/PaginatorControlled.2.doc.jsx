import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ControlledREADME.md';

import { name, version } from '../../../../package.json';

// Example Files
import ControlledPaginatorPropsTable from '!terra-props-table-loader!../../../../src/ControlledPaginator';
import ControlledPaginatorSrc from '!raw-loader!../../../../src/ControlledPaginator';
import ControlledPaginatorExample from './example/ControlledPaginatorExample';
import ControlledPaginatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/paginator/example/ControlledPaginatorExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Controlled Paginator Example',
        example: <ControlledPaginatorExample />,
        source: ControlledPaginatorExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Controlled Paginator',
        componentSrc: ControlledPaginatorSrc,
        componentProps: ControlledPaginatorPropsTable,
      },
    ]}
  />
);

export default DocPage;
