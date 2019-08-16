import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ControlledProgressiveREADME.md';
import PropsTable from '../../../../docs/ControlledProgressivePaginator-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
