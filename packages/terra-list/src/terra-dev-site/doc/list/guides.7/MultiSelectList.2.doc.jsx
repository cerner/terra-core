import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/MultiSelectList.md';
import { name, version } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Example Files
import MultiSelectList from '../../guides/MultiSelectList';
import MultiSelectListSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/MultiSelectList';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <MultiSelectList />,
        source: MultiSelectListSrc,
      },
    ]}
  />
);

export default DocPage;
