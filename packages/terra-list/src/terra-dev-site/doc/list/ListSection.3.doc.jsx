import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSection.md';
import PropsTable from '../../../../docs/ListSection-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ListSectionExample from '../example/ListSection';
import ListSectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSection';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSectionExample />,
        source: ListSectionExamplesSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
