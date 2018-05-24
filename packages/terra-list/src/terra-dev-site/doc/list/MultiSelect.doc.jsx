import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelect.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import MultiSelectSrc from '!raw-loader!../../../../src/MultiSelectList';

// Example Files
import MultiSelectExamples from '../example/MultiSelect';
import MultiSelectExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelect';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <MultiSelectExamples />,
        source: MultiSelectExamplesSrc,
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
