import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSubsectionHeader.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ListSubsectionHeaderSrc from '!raw-loader!../../../../src/ListSubsectionHeader';

// Example Files
import ListSubsectionHeaderExample from '../example/ListSubsectionHeader';
import ListSubsectionHeaderExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSubsectionHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSubsectionHeaderExample />,
        source: ListSubsectionHeaderExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List-Subsection-Header',
        componentSrc: ListSubsectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
