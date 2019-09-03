import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListItem.md';

import { name, version } from '../../../../package.json';

// Example Files
import ListItemPropsTable from '!terra-props-table-loader!../../../../src/ListItem';
import ListItemSrc from '!raw-loader!../../../../src/ListItem';
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
    propsTables={[
      {
        componentName: 'List Item',
        componentSrc: ListItemSrc,
        componentProps: ListItemPropsTable,
      },
    ]}
  />
);

export default DocPage;
