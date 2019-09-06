import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SubsectionHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SubsectionHeaderSrc from '!raw-loader!../../../../src/SubsectionHeader';
import SubsectionHeaderPropsTable from '!terra-props-table-loader!../../../../src/SubsectionHeader';

import SubsectionHeaderExample from '../example/SubsectionHeaderExample';
import SubsectionHeaderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SubsectionHeaderExample';
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
        componentName: 'SubsectionHeader',
        componentSrc: SubsectionHeaderSrc,
        componentProps: SubsectionHeaderPropsTable,
      },
    ]}
  />
);

export default DocPage;
