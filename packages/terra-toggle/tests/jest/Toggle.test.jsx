import React from 'react';
import Toggle from '../../src/Toggle';

describe('Toggle', () => {
  // Snapshot Tests
  it('should render a default toggle', () => {
    const toggle = enzyme.render(<Toggle>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  it('should render an animated toggle', () => {
    const toggle = enzyme.render(<Toggle isAnimated>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  it('should render an open toggle', () => {
    const toggle = enzyme.render(<Toggle isOpen>Test</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  // Prop Tests
  it('should have all props set correctly', () => {
    const toggle = enzyme.shallow(<Toggle isAnimated isOpen>All props</Toggle>);
    expect(toggle).toMatchSnapshot();
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const toggle = enzyme.shallow(<Toggle className="TestClass">Test</Toggle>);
    expect(toggle.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const toggle = enzyme.shallow(<Toggle id="TestId">Test</Toggle>);
    expect(toggle.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const toggle = enzyme.shallow(<Toggle data-terra-text-mock="MockData">Test</Toggle>);
    expect(toggle.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const toggle = enzyme.shallow(<Toggle style={{ height: '100px' }}>Test</Toggle>);
    expect(toggle.prop('style')).toEqual({ height: '100px' });
    /* eslint-disable react/forbid-component-props */
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      enzyme.shallow(<Toggle>Test</Toggle>);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
