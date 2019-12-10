import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SectionHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SectionHeaderSrc from '../../../subcomponents/_SectionHeader';
import SectionHeaderPropsTable from '../../../subcomponents/_SectionHeader';

import SectionHeaderExample from '../../example/SectionHeaderExample';
import SectionHeaderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SectionHeaderExample';
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
        componentName: 'SectionHeader',
        componentSrc: SectionHeaderSrc,
        componentProps: SectionHeaderPropsTable,
      },
    ]}
  />
);

export default DocPage;
