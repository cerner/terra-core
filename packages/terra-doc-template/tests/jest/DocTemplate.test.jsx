import React from 'react';

import DocTemplate from '../../src/DocTemplate';
import readme from '../../examples/test-examples/TestReadme.md';
// eslint-disable-next-line import/no-duplicates
import TestComponentExample from '../../examples/test-examples/TestComponentExample';
// Had to remove !rawloader! from the next two imports as it broke jest, but in normal use it should be there
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions, import/no-duplicates
import exampleSrc from '../../examples/test-examples/TestComponentExample.jsx';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import testComponentSrc from '../../examples/test-examples/TestComponent.jsx';

jest.mock('../../examples/test-examples/TestReadme.md', () => 'test-file-stub');
jest.mock('../../examples/test-examples/TestComponentExample.jsx', () => 'test-file-stub');
jest.mock('../../examples/test-examples/TestComponent.jsx', () => 'test-file-stub');
const exampleElement = <TestComponentExample />;
// Snapshot Tests
it('should render a default component with nothing', () => {
  const wrapper = shallow(<DocTemplate />);
  expect(wrapper).toMatchSnapshot();
});

it('should show the version', () => {
  const wrapper = shallow(<DocTemplate packageName="terra-doc-template" />);
  expect(wrapper).toMatchSnapshot();
});


it('should show the readme', () => {
  const wrapper = shallow(<DocTemplate readme={readme} />);
  expect(wrapper).toMatchSnapshot();
});

it('should show the version and readme', () => {
  const wrapper = shallow(<DocTemplate packageName="terra-doc-template" readme={readme} />);
  expect(wrapper).toMatchSnapshot();
});

it('should show one example', () => {
  const wrapper = shallow(<DocTemplate examples={[{ title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc }]} />);
  expect(wrapper).toMatchSnapshot();
});

it('should show multiple examples', () => {
  const wrapper = shallow(<DocTemplate
    examples={[{ title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc },
      { title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc }]}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('should show one props table', () => {
  const wrapper = shallow(<DocTemplate propsTables={[{ componentSource: testComponentSrc, componentName: 'Test Component' }]} />);
  expect(wrapper).toMatchSnapshot();
});

it('should show multiple props tables', () => {
  const wrapper = shallow(<DocTemplate
    propsTables={[{ componentSource: testComponentSrc, componentName: 'Test Component' },
      { componentSource: testComponentSrc, componentName: 'Test Component (Again)' }]}
  />);
  expect(wrapper).toMatchSnapshot();
});

it('should show the version, readme, examples, and props tables', () => {
  const wrapper = shallow(<DocTemplate
    packageName="terra-doc-template"
    readme={readme}
    examples={[{ title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc },
      { title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc }]}
    propsTables={[{ componentSource: testComponentSrc, componentName: 'Test Component' },
      { componentSource: testComponentSrc, componentName: 'Test Component (Again)' }]}
  />);
  expect(wrapper).toMatchSnapshot();
});
