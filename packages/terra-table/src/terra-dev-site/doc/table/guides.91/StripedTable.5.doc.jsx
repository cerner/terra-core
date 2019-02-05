import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/StripedTable.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import StripedTable from '../../guides/StripedTable';
import StripedTableSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/StripedTable';
import StripedTableSection from '../../guides/StripedTableSection';
import StripedTableSectionSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/StripedTableSection';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Striped Table',
        example: <StripedTable />,
        source: StripedTableSrc,
      },
      {
        title: 'Striped Table Section',
        example: <StripedTableSection />,
        source: StripedTableSectionSrc,
      },
    ]}
  />
);

export default DocPage;
