import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelect.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import SingleSelectSrc from '!raw-loader!terra-list/src/SingleSelectList';

// Example File
import SingleSelectExamples from '../example/SingleSelect';
import SingleSelectExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelect';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

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
