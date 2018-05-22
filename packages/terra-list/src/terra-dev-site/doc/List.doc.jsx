/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-list/docs/README.md';
import { name } from 'terra-list/package.json';

// Component Source
import ListItemSrc from '!raw-loader!terra-list/src/ListItem.jsx';
import ListSrc from '!raw-loader!terra-list/src/List.jsx';

// Example File
import ListExample from './example/List';
import ListExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/List';

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
