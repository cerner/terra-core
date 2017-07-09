import React from 'react';
import Toggle from '../../src/Toggle';

describe('Toggle', () => {
  // Snapshot Tests
  it('should render a default toggle', () => {
    const toggle = render(<Toggle>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  it('should render an animated toggle', () => {
    const toggle = render(<Toggle isAnimated>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  it('should render an open toggle', () => {
    const toggle = render(<Toggle isOpen>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  // Prop Tests
  it('should have all props set correctly', () => {
    const toggle = shallow(<Toggle isAnimated isOpen>All props</Toggle>);
    expect(toggle.unrendered.props.isAnimated).toEqual(true);
    expect(toggle.unrendered.props.isOpen).toEqual(true);
    expect(toggle.unrendered.props.children).toEqual('All props');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const toggle = shallow(<Toggle className="TestClass">Test</Toggle>);
    expect(toggle.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const toggle = shallow(<Toggle id="TestId">Test</Toggle>);
    expect(toggle.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const toggle = shallow(<Toggle data-terra-text-mock="MockData">Test</Toggle>);
    expect(toggle.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const toggle = shallow(<Toggle style={{ height: '100px' }}>Test</Toggle>);
    expect(toggle.prop('style')).toEqual({ height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<Toggle>Test</Toggle>);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
