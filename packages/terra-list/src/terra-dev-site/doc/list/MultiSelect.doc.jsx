/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-list/docs/MultiSelect.md';
import { name } from 'terra-list/package.json';

// Component Source
import MultiSelectSrc from '!raw-loader!terra-list/src/MultiSelectList';

// Example Files
import MultiSelectExamples from '../example/MultiSelect';
import MultiSelectExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MultiSelect';

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
