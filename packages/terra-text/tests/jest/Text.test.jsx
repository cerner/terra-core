import React from 'react';
import Text from '../../src/Text';

describe('Text', () => {
  // Snapshot Tests
  it('should render a text component', () => {
    const text = shallow(<Text>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isItalic prop set', () => {
    const text = shallow(<Text isItalic>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isVisuallyHidden prop set', () => {
    const text = shallow(<Text isVisuallyHidden>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with fontSize prop set', () => {
    const text = shallow(<Text fontSize={24}>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with weight prop set', () => {
    const text = shallow(<Text weight={200}>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with colorClass prop set', () => {
    const text = shallow(<Text colorClass="testClass">Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isWordWrapped prop set', () => {
    const text = shallow(<Text isWordWrapped>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering a string as children', () => {
    const text = shallow(<Text>String</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering an element as children', () => {
    const text = shallow(<Text><span>Element</span></Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering an array of elements as a children', () => {
    /* eslint-disable comma-dangle */
    const text = shallow(
      <Text>
        <span>Element 1</span>
        <span>Element 2</span>
        <span>Element 3</span>
      </Text>
    );
    expect(text).toMatchSnapshot();
    /* eslint-enable comma-dangle */
  });

  // Prop Tests
  it('should have all props including customProps set correctly', () => {
    const text = shallow(<Text id="id" fontSize={20} weight={200} isItalic isVisuallyHidden isWordWrapped>All props and custom attrs</Text>);
    expect(text).toMatchSnapshot();
    expect(text.find('.text').text()).toEqual('All props and custom attrs');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const text = shallow(<Text className="TestClass">Test</Text>);
    expect(text.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const text = shallow(<Text id="TestId">Test</Text>);
    expect(text.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const text = shallow(<Text data-terra-text-mock="MockData">Test</Text>);
    expect(text.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const text = shallow(<Text style={{ height: '100px' }}>Test</Text>);
    expect(text.prop('style')).toEqual({ height: '100px' });
    /* eslint-disable react/forbid-component-props */
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<Text />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
