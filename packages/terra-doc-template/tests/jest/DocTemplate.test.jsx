import React from 'react';
import DocTemplate from '../../src/DocTemplate';
import TestComponentExample from '../../src/terra-dev-site/test/doc-template/common/TestComponentExample';
import CustomPropsTable from '../../src/terra-dev-site/test/doc-template/common/CustomPropsTable';

// These cannot be properly imported with jest so substitute this value in instead
const readme = 'test-file-stub';
const exampleSrc = 'test-file-stub';
const testComponentSrc = 'test-file-stub';
const packageName = 'terra-doc-template';

const exampleElement = <TestComponentExample />;

describe('DocTemplate', () => {
  // Snapshot Tests
  it('should render a default component with nothing', () => {
    const wrapper = shallow(<DocTemplate />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the version', () => {
    const wrapper = shallow(<DocTemplate packageName={packageName} />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should show the readme', () => {
    const wrapper = shallow(<DocTemplate readme={readme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the version and readme', () => {
    const wrapper = shallow(<DocTemplate packageName={packageName} readme={readme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show one example', () => {
    const wrapper = shallow(<DocTemplate examples={[{
      title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc,
    }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show multiple examples', () => {
    const wrapper = shallow(<DocTemplate
      examples={[{
        title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc,
      },
      {
        title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc,
      }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show one props table', () => {
    const wrapper = shallow(<DocTemplate propsTables={[{ componentSrc: testComponentSrc, componentName: 'Test Component' }]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show multiple props tables', () => {
    const wrapper = shallow(<DocTemplate
      propsTables={[{ componentSrc: testComponentSrc, componentName: 'Test Component' },
        { componentSrc: testComponentSrc, componentName: 'Test Component (Again)' }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show custom props tables', () => {
    const wrapper = render(<DocTemplate><CustomPropsTable /></DocTemplate>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show props table with findAllComponentDefinitions prop resolution', () => {
    const wrapper = shallow(<DocTemplate propsTables={[{ componentSrc: testComponentSrc, componentName: 'Test Component', propsResolution: 'findAllComponentDefinitions' }]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show the version, readme, source link, examples, and props tables', () => {
    const wrapper = shallow(<DocTemplate
      packageName={packageName}
      readme={readme}
      srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
      examples={[{
        title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: exampleSrc,
      },
      {
        title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: exampleSrc,
      }]}
      propsTables={[{ componentSrc: testComponentSrc, componentName: 'Test Component' },
        { componentSrc: testComponentSrc, componentName: 'Test Component (Again)' }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
