import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Rows.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/TableRows-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

import RowsOnClick from '../example/RowsOnClick';
import RowsOnClickSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnClick';
import RowsOnKeyDown from '../example/RowsOnKeyDown';
import RowsOnKeyDownSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RowsOnKeyDown';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Table Rows (onClick callback)',
        example: <RowsOnClick />,
        source: RowsOnClickSrc,
      },
      {
        title: 'Table Rows (onKeyDown callback)',
        description: 'Note: Requires Table Row children to be focusable.',
        example: <RowsOnKeyDown />,
        source: RowsOnKeyDownSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
