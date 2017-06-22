import React from 'react';
import Toggler from '../../src/Toggler';

describe('Toggler', () => {
  // Snapshot Tests
  it('should render a default toggler', () => {
    const toggler = render(<Toggler>Test</Toggler>);
    expect(toggler).toMatchSnapshot();
  });

  it('should render an animated toggler', () => {
    const toggler = render(<Toggler isAnimated>Test</Toggler>);
    expect(toggler).toMatchSnapshot();
  });

  it('should render an open toggler', () => {
    const toggler = render(<Toggler isOpen>Test</Toggler>);
    expect(toggler).toMatchSnapshot();
  });

  // Prop Tests
  it('should have all props set correctly', () => {
    const toggler = shallow(<Toggler isAnimated isOpen>All props</Toggler>);
    expect(toggler.unrendered.props.isAnimated).toEqual(true);
    expect(toggler.unrendered.props.isOpen).toEqual(true);
    expect(toggler.unrendered.props.children).toEqual('All props');
  });

  // Structure Tests
  it('should include the <AnimateHeight> component when isAnimated is set', () => {
    const toggler = shallow(<Toggler isAnimated>Test</Toggler>);
    expect(toggler.find('.terra-Toggler').text()).toEqual('<AnimateHeight />');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const toggler = shallow(<Toggler className="TestClass">Test</Toggler>);
    expect(toggler.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const toggler = shallow(<Toggler id="TestId">Test</Toggler>);
    expect(toggler.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const toggler = shallow(<Toggler data-terra-text-mock="MockData">Test</Toggler>);
    expect(toggler.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const toggler = shallow(<Toggler style={{ height: '100px' }}>Test</Toggler>);
    expect(toggler.prop('style')).toEqual({ height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<Toggler>Test</Toggler>);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
