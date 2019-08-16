import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListItem.md';
import PropsTable from '../../../../docs/ListItem-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ListItemExample from '../example/ListItem';
import ListItemExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListItem';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListItemExample />,
        source: ListItemExamplesSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
