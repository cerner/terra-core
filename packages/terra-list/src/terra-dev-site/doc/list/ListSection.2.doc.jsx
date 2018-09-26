import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSection.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ListSectionSrc from '!raw-loader!../../../../src/ListSection';

// Example Files
import ListSectionExample from '../example/ListSection';
import ListSectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSection';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSectionExample />,
        source: ListSectionExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List-Section',
        componentSrc: ListSectionSrc,
      },
    ]}
  />
);

export default DocPage;
