import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TableSubsectionHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TableSubsectionHeaderSrc from '!raw-loader!../../../../src/TableSubsectionHeader';

import SubsectionHeaderExample from '../example/TableSubsectionHeader';
import SubsectionHeaderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TableSubsectionHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SubsectionHeaderExample />,
        source: SubsectionHeaderExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'TableSubsectionHeader',
        componentSrc: TableSubsectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
