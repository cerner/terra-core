import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSubsection.md';
import PropsTable from '../../../../docs/ListSubsection-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ListSubsectionExample from '../example/ListSubsection';
import ListSubsectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSubsection';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSubsectionExample />,
        source: ListSubsectionExamplesSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
