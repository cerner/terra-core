import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSubsectionHeader.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/ListSubsectionHeader-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import ListSubsectionHeaderExample from '../example/ListSubsectionHeader';
import ListSubsectionHeaderExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSubsectionHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSubsectionHeaderExample />,
        source: ListSubsectionHeaderExamplesSrc,
      },
    ]}
    propsTablesMarkdown={PropsTable}
  />
);

export default DocPage;
