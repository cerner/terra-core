import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSectionHeader.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ListSectionHeaderSrc from '!raw-loader!../../../../src/ListSectionHeader';

// Example Files
import ListSectionHeaderExample from '../example/ListSectionHeader';
import ListSectionHeaderExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSectionHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSectionHeaderExample />,
        source: ListSectionHeaderExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List-Section-Header',
        componentSrc: ListSectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
