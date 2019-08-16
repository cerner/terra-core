import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ControlledREADME.md';
import PropsTable from '../../../../docs/ControlledPaginator-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
