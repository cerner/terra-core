import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/SingleSelectList.md';
import { name, version } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Example Files
import SingleSelectList from '../../guides/SingleSelectList';
import SingleSelectListSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/SingleSelectList';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SingleSelectList />,
        source: SingleSelectListSrc,
      },
    ]}
  />
);

export default DocPage;
