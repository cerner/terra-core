import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableSection.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSectionSrc from '!raw-loader!../../../../src/TableSection';

import SectionExample from '../example/TableSection';
import SectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableSection';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SectionExample />,
        source: SectionExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableSection',
        componentSrc: TableSectionSrc,
      },
    ]}
  />
);

export default DocPage;
