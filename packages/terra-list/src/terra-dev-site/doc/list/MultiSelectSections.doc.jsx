import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectSections.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import MultiSelectSrc from '!raw-loader!../../../../src/MultiSelectList';

// Example Files
import MultiSelectSectionExamples from '../example/MultiSelectSections';
import MultiSelectSectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelectSections';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <MultiSelectSectionExamples />,
        source: MultiSelectSectionExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Multi-Select',
        componentSrc: MultiSelectSrc,
      },
    ]}
  />
);

export default DocPage;
