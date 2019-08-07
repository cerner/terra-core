import React from 'react';
import DocTemplate from 'terra-doc-template';
// import ReadMe from '../../../../../docs/guides/SectionTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import CellsTable from '../../guides/CellsTable';
import CellsTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/CellsTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    // readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <CellsTable />,
        source: CellsTableSrc,
      },
    ]}
  />
);

export default DocPage;
