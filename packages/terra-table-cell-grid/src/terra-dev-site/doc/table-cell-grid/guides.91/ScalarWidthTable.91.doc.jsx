import React from 'react';
import DocTemplate from 'terra-doc-template';
// import ReadMe from '../../../../../docs/guides/SectionTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ScalarWidthTable from '../../guides/ScalarWidthTable';
import ScalarWidthTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/ScalarWidthTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    // readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ScalarWidthTable />,
        source: ScalarWidthTableSrc,
      },
    ]}
  />
);

export default DocPage;
