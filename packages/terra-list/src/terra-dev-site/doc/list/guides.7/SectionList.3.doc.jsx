import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/SectionList.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import SectionList from '../../guides/SectionList';
import SectionListSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/SectionList';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <SectionList />,
        source: SectionListSrc,
      },
    ]}
  />
);

export default DocPage;
