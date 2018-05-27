import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Selectable.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SelectableListSrc from '!raw-loader!terra-list/src/SelectableList';

// Example File
import SelectableListExamples from '../example/Selectable';
import SelectableListExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Selectable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Selectable List',
        example: <SelectableListExamples />,
        source: SelectableListExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Selectable List',
        componentSrc: SelectableListSrc,
      },
    ]}
  />
);

export default DocPage;
