import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListItem.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ListItemSrc from '!raw-loader!../../../../src/ListItem';

// Example Files
import ListItemExample from '../example/ListItem';
import ListItemExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListItem';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
        componentName: 'List-Item',
        componentSrc: ListItemSrc,
      },
    ]}
  />
);

export default DocPage;
