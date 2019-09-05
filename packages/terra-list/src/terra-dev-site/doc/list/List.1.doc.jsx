import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example File
import ListPropsTable from '!terra-props-table-loader!../../../../src/List';
import ListSrc from '!raw-loader!../../../../src/List';
import ListExample from '../example/List';
import ListExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/List';
import ListDividedExample from '../example/ListDivided';
import ListDividedExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListDivided';
import ListPaddedExample from '../example/ListPadded';
import ListPaddedExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListPadded';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Padded List',
        example: <ListPaddedExample />,
        source: ListPaddedExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List',
        componentSrc: ListSrc,
        componentProps: ListPropsTable,
      },
    ]}
  />
);

export default DocPage;
