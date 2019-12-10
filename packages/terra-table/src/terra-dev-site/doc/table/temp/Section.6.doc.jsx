import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Section.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SectionSrc from '../../../../subcomponents/_Section';
import SectionPropsTable from '../../../../subcomponents/_Section';

import SectionExample from '../../example/SectionExample';
import SectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SectionExample';
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
        componentName: 'Section',
        componentSrc: SectionSrc,
        componentProps: SectionPropsTable,
      },
    ]}
  />
);

export default DocPage;
