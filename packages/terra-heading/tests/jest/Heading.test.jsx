import React from 'react';
import Heading from '../../src/Heading';

describe('Heading', () => {
  // Snapshot Tests
  it('should render a heading component', () => {
    const heading = shallow(<Heading level={1}>Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should render a heading component with color prop set', () => {
    const heading = shallow(<Heading level={1} color="#f00">Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should render a heading component with isItalic prop set', () => {
    const heading = shallow(<Heading level={1} isItalic>Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should render a heading component with isVisuallyHidden prop set', () => {
    const heading = shallow(<Heading level={1} isVisuallyHidden>Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should render a heading component with size prop set', () => {
    const heading = shallow(<Heading level={1} size="large">Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should render a heading component with weight prop set', () => {
    const heading = shallow(<Heading level={1} weight={200}>Test</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should support rendering a string as children', () => {
    const heading = shallow(<Heading level={1}>String</Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should support rendering an element as children', () => {
    const heading = shallow(<Heading level={1}><span>Element</span></Heading>);
    expect(heading).toMatchSnapshot();
  });

  it('should support rendering an array of elements as a children', () => {
    const heading = shallow(<Heading level={1}><span>Element 1</span><span>Element 2</span><span>Element 3</span></Heading>);
    expect(heading).toMatchSnapshot();
  });

  // Prop Tests
  it('should have all props including customProps set correctly', () => {
    const heading = shallow(<Heading level={1} id="id" size="small" color="#f00" weight={200} isItalic isVisuallyHidden>All props and custom attrs</Heading>);
    expect(heading.unrendered.props.id).toEqual('id');
    expect(heading.unrendered.props.size).toEqual('small');
    expect(heading.unrendered.props.color).toEqual('#f00');
    expect(heading.unrendered.props.weight).toEqual(200);
    expect(heading.unrendered.props.isItalic).toEqual(true);
    expect(heading.unrendered.props.isVisuallyHidden).toEqual(true);
    expect(heading.find('#id').text()).toEqual('All props and custom attrs');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const heading = shallow(<Heading level={1} className="TestClass">Test</Heading>);
    expect(heading.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const heading = shallow(<Heading level={1} id="TestId">Test</Heading>);
    expect(heading.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const heading = shallow(<Heading level={1} data-terra-text-mock="MockData">Test</Heading>);
    expect(heading.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const heading = shallow(<Heading level={1} style={{ height: '100px' }}>Test</Heading>);
    expect(heading.prop('style')).toEqual({ color: 'inherit', height: '100px' });
  });

  it('should merge color value with styles passed in with attributes when both are set', () => {
    const heading = shallow(<Heading level={1} color="#f00" style={{ height: '100px' }}>Test</Heading>);
    expect(heading.prop('style')).toEqual({ color: '#f00', height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<Heading level={1} />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required heading level', () => {
    try {
      shallow(<Heading>Test</Heading>);
    } catch (e) {
      expect(e.message).toContain('The prop `level` is marked as required');
    }
  });
});
