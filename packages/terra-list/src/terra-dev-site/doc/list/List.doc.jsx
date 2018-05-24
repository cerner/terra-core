import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import ListItemSrc from '!raw-loader!../../../../src/ListItem.jsx';
import ListSrc from '!raw-loader!../../../../src/List.jsx';

// Example File
import ListExample from '../example/List';
import ListExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/List';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default List',
        example: <ListExample />,
        source: ListExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List',
        componentSrc: ListSrc,
      },
      {
        componentName: 'List Item',
        componentSrc: ListItemSrc,
      },
    ]}
  />
);

export default DocPage;
