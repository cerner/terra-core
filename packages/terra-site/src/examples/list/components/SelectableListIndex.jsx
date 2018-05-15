/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-list/docs/Selectable.md';
import { name } from 'terra-list/package.json';

// Component Source
import SelectableListSrc from '!raw-loader!terra-list/src/SelectableList';

// Example File
import SelectableListExamples from '../examples/Selectable';
import SelectableListExamplesSrc from '!raw-loader!../examples/Selectable';

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
