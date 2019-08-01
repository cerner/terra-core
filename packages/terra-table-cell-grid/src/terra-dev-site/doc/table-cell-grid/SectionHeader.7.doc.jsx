import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableSectionHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSectionHeaderSrc from '!raw-loader!../../../../src/TableSectionHeader';

import SectionHeaderExample from '../example/TableSectionHeader';
import SectionHeaderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableSectionHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SectionHeaderExample />,
        source: SectionHeaderExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableSectionHeader',
        componentSrc: TableSectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
