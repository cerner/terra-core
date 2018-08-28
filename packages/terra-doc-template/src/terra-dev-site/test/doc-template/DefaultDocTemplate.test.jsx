import React from 'react';
import DocTemplate from '../../../DocTemplate';
import readme from './common/TestReadme.md';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions, import/no-duplicates */
import TestComponentExample from './common/TestComponentExample';
import CustomPropsTable from './common/CustomPropsTable';
import exampleSrc from '!raw-loader!../../../../src/terra-dev-site/test/doc-template/common/TestComponentExample';
import testComponentSrc from '!raw-loader!../../../../src/terra-dev-site/test/doc-template/common/TestComponent';
/* eslint-enisable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


const Index = () => {
  const propsTables = [
    { componentSrc: testComponentSrc, componentName: 'Test Component' },
    { componentSrc: testComponentSrc, componentName: 'Test Component (Again)' },
  ];
  const exampleElement = <TestComponentExample />;
  const examples = [
    {
      title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc,
    },
    {
      title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc,
    },
  ];

  return (
    <div id="DocTemplateContainer">
      <DocTemplate
        packageName="test-package-name"
        readme={readme}
        srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
        propsTables={propsTables}
        examples={examples}
      >
        <CustomPropsTable />
      </DocTemplate>
    </div>
  );
};

export default Index;
