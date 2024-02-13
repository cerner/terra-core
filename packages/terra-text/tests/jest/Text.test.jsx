import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Text from '../../src/Text';

describe('Text', () => {
  // Snapshot Tests
  it('should render a text component', () => {
    const text = enzyme.shallow(<Text>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isItalic prop set', () => {
    const text = enzyme.shallow(<Text isItalic>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isVisuallyHidden prop set', () => {
    const text = enzyme.shallow(<Text isVisuallyHidden>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with fontSize prop set', () => {
    const text = enzyme.shallow(<Text fontSize={24}>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with weight prop set', () => {
    const text = enzyme.shallow(<Text weight={200}>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with colorClass prop set', () => {
    const text = enzyme.shallow(<Text colorClass="testClass">Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should render a text component with isWordWrapped prop set', () => {
    const text = enzyme.shallow(<Text isWordWrapped>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering a string as children', () => {
    const text = enzyme.shallow(<Text>String</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering an element as children', () => {
    const text = enzyme.shallow(<Text><span>Element</span></Text>);
    expect(text).toMatchSnapshot();
  });

  it('should set inherit-color class if no colorClass is provided', () => {
    const text = enzyme.shallow(<Text>Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should not set inherit-color class is a colorClass is provided', () => {
    const text = enzyme.shallow(<Text colorClass="TestClass">Test</Text>);
    expect(text).toMatchSnapshot();
  });

  it('should support rendering an array of elements as a children', () => {
    /* eslint-disable comma-dangle */
    const text = enzyme.shallow(
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
    const text = enzyme.shallow(<Text id="id" fontSize={20} weight={200} isItalic isVisuallyHidden isWordWrapped>All props and custom attrs</Text>);
    expect(text).toMatchSnapshot();
    expect(text.find('.text').text()).toEqual('All props and custom attrs');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const text = enzyme.shallow(<Text className="TestClass">Test</Text>);
    expect(text.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const text = enzyme.shallow(<Text id="TestId">Test</Text>);
    expect(text.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const text = enzyme.shallow(<Text data-terra-text-mock="MockData">Test</Text>);
    expect(text.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const text = enzyme.shallow(<Text style={{ height: '100px' }}>Test</Text>);
    expect(text.prop('style')).toEqual({ height: '100px' });
    /* eslint-disable react/forbid-component-props */
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      enzyme.shallow(<Text />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('correctly applies the theme context className', () => {
    const tag = enzyme.mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Text>Test</Text>
      </ThemeContextProvider>,
    );
    expect(tag).toMatchSnapshot();
  });
});
