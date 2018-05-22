/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-list/docs/SingleSelect.md';
import { name } from 'terra-list/package.json';

// Component Source
import SingleSelectSrc from '!raw-loader!terra-list/src/SingleSelectList';

// Example File
import SingleSelectExamples from '../example/SingleSelect';
import SingleSelectExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelect';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Single Selectable List',
        example: <SingleSelectExamples />,
        source: SingleSelectExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Single Selectable List',
        componentSrc: SingleSelectSrc,
      },
    ]}
  />
);

export default DocPage;
