import React from 'react';
import DocTemplate from 'terra-doc-template';
// import ReadMe from '../../../../../docs/guides/SectionTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import CheckedTable from '../../guides/CheckedTable';
import CheckedTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/CheckedTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    // readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <CheckedTable />,
        source: CheckedTableSrc,
      },
    ]}
  />
);

export default DocPage;
