import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/List.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ListSrc from '!raw-loader!../../../../src/List.jsx';

// Example File
import ListExample from '../example/List';
import ListExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/List';
import ListDividedExample from '../example/ListDivided';
import ListDividedExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListDivided';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
      {
        title: 'Divided List',
        example: <ListDividedExample />,
        source: ListDividedExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List',
        componentSrc: ListSrc,
      },
    ]}
  />
);

export default DocPage;
