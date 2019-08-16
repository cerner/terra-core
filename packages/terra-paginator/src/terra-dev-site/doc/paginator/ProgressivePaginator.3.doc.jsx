import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ProgressiveREADME.md';
import PropsTable from '../../../../docs/ProgressivePaginator-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
