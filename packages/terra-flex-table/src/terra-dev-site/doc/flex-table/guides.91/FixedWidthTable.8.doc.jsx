import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/FixedWidthTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import FixedWidthTable from '../../guides/FixedWidthTable';
import FixedWidthTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/FixedWidthTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <FixedWidthTable />,
        source: FixedWidthTableSrc,
      },
    ]}
  />
);

export default DocPage;
