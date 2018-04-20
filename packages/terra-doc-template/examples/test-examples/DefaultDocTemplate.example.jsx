import React from 'react';

import DocTemplate from '../../src/DocTemplate';
import readme from './TestReadme.md';
import TestComponentExample from './TestComponentExample';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import exampleSrc from '!raw-loader!./TestComponentExample';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import testComponentSrc from '!raw-loader!./TestComponent';

const Index = () => {
  const propsTables = [
    { componentSource: testComponentSrc, componentName: 'Test Component' },
    { componentSource: testComponentSrc, componentName: 'Test Component (Again)' },
  ];
  const exampleElement = <TestComponentExample />;
  const examples = [
    { title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc },
    { title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc },
  ];

  return (
    <div id="DocTemplateContainer">
      <DocTemplate packageName="test-package-name" readme={readme} propsTables={propsTables} examples={examples} />
    </div>
  );
};

export default Index;
