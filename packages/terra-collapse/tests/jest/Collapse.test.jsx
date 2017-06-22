import React from 'react';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import Collapse from '../../src/Collapse';


describe('Collapse', () => {
  // Snapshot Tests
  it('should render a default collapse', () => {
    const collapse = render(<Collapse closedButtonText="Show">Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  it('should render an animated collapse', () => {
    const collapse = render(<Collapse closedButtonText="Show" isAnimated>Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  it('should render an initially open collapse', () => {
    const collapse = render(<Collapse closedButtonText="Show" isInitiallyOpen>Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  it('should render an icon only collapse', () => {
    const collapse = render(<Collapse closedButtonText="Show" isIconOnly>Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  // Event Tests
  it('should render an open collapse when clicked', () => {
    const collapse = mount(<Collapse closedButtonText="Show">Test</Collapse>);
    collapse.find('button').simulate('click');
    expect(collapse).toMatchSnapshot();
  });

  // Prop Tests
  it('should set buttonAttrs prop correctly', () => {
    const collapse = shallow(<Collapse buttonAttrs={{ variant: 'link' }} closedButtonText="Show">Test</Collapse>);
    expect(collapse.unrendered.props.buttonAttrs).toEqual({ variant: 'link' });
  });

  it('should set children prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show">Test</Collapse>);
    expect(collapse.unrendered.props.children).toEqual('Test');
  });

  it('should set closedButtonText prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show">Test</Collapse>);
    expect(collapse.unrendered.props.closedButtonText).toEqual('Show');
  });

  it('should set icon prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show">Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  it('should set icon prop correctly with custom icon', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" icon={<IconCaretRight />}>Test</Collapse>);
    expect(collapse).toMatchSnapshot();
  });

  it('should set isAnimated prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" isAnimated>Test</Collapse>);
    expect(collapse.unrendered.props.isAnimated).toEqual(true);
  });

  it('should set isIconAnimated prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" isIconAnimated>Test</Collapse>);
    expect(collapse.unrendered.props.isIconAnimated).toEqual(true);
  });

  it('should set isIconOnly prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" isIconOnly>Test</Collapse>);
    expect(collapse.unrendered.props.isIconOnly).toEqual(true);
  });

  it('should set isInitiallyOpen prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" isInitiallyOpen>Test</Collapse>);
    expect(collapse.unrendered.props.isInitiallyOpen).toEqual(true);
  });

  it('should set onOpen prop correctly', () => {
    // eslint-disable-next-line no-alert
    const collapse = shallow(<Collapse closedButtonText="Show" onOpen={() => alert('Opened')}>Test</Collapse>);
    expect(collapse.unrendered.props.onOpen.toString()).toEqual('function onOpen() {return alert(\'Opened\');}');
  });

  it('should set onClose prop correctly', () => {
    // eslint-disable-next-line no-alert
    const collapse = shallow(<Collapse closedButtonText="Show" onClose={() => alert('Closed')}>Test</Collapse>);
    expect(collapse.unrendered.props.onClose.toString()).toEqual('function onClose() {return alert(\'Closed\');}');
  });

  it('should set openedButtonText prop correctly', () => {
    const collapse = shallow(<Collapse closedButtonText="Show" openedButtonText="Hide">Test</Collapse>);
    expect(collapse.unrendered.props.openedButtonText).toEqual('Hide');
  });

 // Attributes
  it('should merge classes passed in with attributes', () => {
    const collapse = shallow(<Collapse className="TestClass" closedButtonText="Show">Test</Collapse>);
    expect(collapse.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const collapse = shallow(<Collapse id="TestId" closedButtonText="Show">Test</Collapse>);
    expect(collapse.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const collapse = shallow(<Collapse data-terra-text-mock="MockData" closedButtonText="Show">Test</Collapse>);
    expect(collapse.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    const collapse = shallow(<Collapse style={{ height: '100px' }} closedButtonText="Show">Test</Collapse>);
    expect(collapse.prop('style')).toEqual({ height: '100px' });
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<Collapse closedButtonText="Show">Test</Collapse>);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required closedButtonText', () => {
    try {
      shallow(<Collapse>Test</Collapse>);
    } catch (e) {
      expect(e.message).toContain('The prop `closedButtonText` is marked as required');
    }
  });
});
