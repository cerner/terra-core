import React from 'react';
import IconCaretLeft from 'terra-icon/lib/icon/IconCaretLeft';
import ShowHide from '../../src/ShowHide';

describe('ShowHide', () => {
  // Snapshot Tests
  it('should render a default show-hide component', () => {
    const showHide = render(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render an animated show-hide component', () => {
    const showHide = render(<ShowHide preview="Test" isAnimated>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render an initially open show-hide component', () => {
    const showHide = render(<ShowHide preview="Test" isInitiallyOpen>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  // Event Tests
  it('should render an open show-hide component when clicked', () => {
    const showHide = mount(<ShowHide preview="Test">Full Text</ShowHide>);
    showHide.find('button').simulate('click');
    expect(showHide).toMatchSnapshot();
  });

  // Prop Tests
  it('should set children prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide.instance().props.children).toEqual('Full Text');
  });

  it('should set collapsedText prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test" collapsedText="Collapsed Text">Full Text</ShowHide>);
    expect(showHide.instance().props.collapsedText).toEqual('Collapsed Text');
  });

  it('should set icon prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set icon prop correctly with custom icon', () => {
    const showHide = shallow(<ShowHide preview="Test" icon={<IconCaretLeft />}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set isAnimated prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test" isAnimated>Full Text</ShowHide>);
    expect(showHide.instance().props.isAnimated).toEqual(true);
  });

  it('should set isInitiallyOpen prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test" isInitiallyOpen>Full Text</ShowHide>);
    expect(showHide.instance().props.isInitiallyOpen).toEqual(true);
  });

  it('should set onOpen prop correctly', () => {
    window.alert = jest.fn();
    // eslint-disable-next-line no-alert
    const showHide = mount(<ShowHide preview="Test" onOpen={() => alert('Opened')}>Full Text</ShowHide>);
    showHide.find('button').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Opened');
  });

  it('should set onClose prop correctly', () => {
    window.alert = jest.fn();
    // eslint-disable-next-line no-alert
    const showHide = mount(<ShowHide preview="Test" onClose={() => alert('Closed')} isInitiallyOpen>Full Text</ShowHide>);
    showHide.find('button').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Closed');
  });

  it('should set expandedText prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Test" expandedText="Expanded Text">Full Text</ShowHide>);
    expect(showHide.instance().props.expandedText).toEqual('Expanded Text');
  });

  it('should set preview prop correctly', () => {
    const showHide = shallow(<ShowHide preview="Preview Text">Full Text</ShowHide>);
    expect(showHide.instance().props.preview).toEqual('Preview Text');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const showHide = shallow(<ShowHide className="TestClass" preview="Test">Full Text</ShowHide>);
    expect(showHide.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const showHide = shallow(<ShowHide id="TestId" preview="Test">Full Text</ShowHide>);
    expect(showHide.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const showHide = shallow(<ShowHide data-terra-text-mock="MockData" preview="Test">Full Text</ShowHide>);
    expect(showHide.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const showHide = shallow(<ShowHide style={{ height: '100px' }} preview="Test">Full Text</ShowHide>);
    expect(showHide.prop('style')).toEqual({ height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<ShowHide preview="Test" />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required preview prop', () => {
    try {
      shallow(<ShowHide>Full Text</ShowHide>);
    } catch (e) {
      expect(e.message).toContain('The prop `preview` is marked as required');
    }
  });
});
