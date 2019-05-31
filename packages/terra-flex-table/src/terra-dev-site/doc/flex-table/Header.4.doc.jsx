import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableHeaderSrc from '!raw-loader!../../../../src/TableHeader';

import HeaderExample from '../example/TableHeader';
import HeaderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Header',
        example: <HeaderExample />,
        source: HeaderExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableHeader',
        componentSrc: TableHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
