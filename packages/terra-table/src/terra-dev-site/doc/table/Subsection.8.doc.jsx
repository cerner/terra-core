import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Subsection.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SubsectionSrc from '!raw-loader!../../../../src/Subsection';

import SubsectionExample from '../example/SubsectionExample';
import SubsectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SubsectionExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SubsectionExample />,
        source: SubsectionExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Subsection',
        componentSrc: SubsectionSrc,
      },
    ]}
  />
);

export default DocPage;
