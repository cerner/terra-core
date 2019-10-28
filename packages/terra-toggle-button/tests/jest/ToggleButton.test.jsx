import React from 'react';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import ToggleButton from '../../src/ToggleButton';

describe('ToggleButton', () => {
  // Snapshot Tests
  it('should render a default toggle-button', () => {
    const toggleButton = render(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should render an animated toggle-button', () => {
    const toggleButton = render(<ToggleButton closedButtonText="Show" isAnimated>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should render an initially open toggle-button', () => {
    const toggleButton = render(<ToggleButton closedButtonText="Show" isInitiallyOpen>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should render an icon only toggle-button', () => {
    const toggleButton = render(<ToggleButton closedButtonText="Show" isIconOnly>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  // Event Tests
  it('should render an open toggle-button when clicked', () => {
    const toggleButton = mount(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    toggleButton.find('button').simulate('click');
    expect(toggleButton).toMatchSnapshot();
  });

  // Prop Tests
  it('should set buttonAttrs prop correctly', () => {
    const toggleButton = shallow(<ToggleButton buttonAttrs={{ variant: 'emphasis' }} closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.instance().props.buttonAttrs).toEqual({ variant: 'emphasis' });
  });

  it('should set children prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.instance().props.children).toEqual('Test');
  });

  it('should set closedButtonText prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.instance().props.closedButtonText).toEqual('Show');
  });

  it('should set icon prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should set icon prop correctly with custom icon', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" icon={<IconCaretRight />}>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should set isAnimated prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" isAnimated>Test</ToggleButton>);
    expect(toggleButton.instance().props.isAnimated).toEqual(true);
  });

  it('should set isIconAnimated prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" isIconAnimated>Test</ToggleButton>);
    expect(toggleButton.instance().props.isIconAnimated).toEqual(true);
  });

  it('should set isIconOnly prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" isIconOnly>Test</ToggleButton>);
    expect(toggleButton.instance().props.isIconOnly).toEqual(true);
  });

  it('should set isInitiallyOpen prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" isInitiallyOpen>Test</ToggleButton>);
    expect(toggleButton.instance().props.isInitiallyOpen).toEqual(true);
  });

  it('should set onOpen prop correctly', () => {
    // eslint-disable-next-line no-alert
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" onOpen={() => alert('Opened')}>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should set onClose prop correctly', () => {
    // eslint-disable-next-line no-alert
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" onClose={() => alert('Closed')}>Test</ToggleButton>);
    expect(toggleButton).toMatchSnapshot();
  });

  it('should set openedButtonText prop correctly', () => {
    const toggleButton = shallow(<ToggleButton closedButtonText="Show" openedButtonText="Hide">Test</ToggleButton>);
    expect(toggleButton.instance().props.openedButtonText).toEqual('Hide');
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const toggleButton = shallow(<ToggleButton className="TestClass" closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.prop('className')).toContain('TestClass');
  });

  it('should merge ids passed in with attributes', () => {
    const toggleButton = shallow(<ToggleButton id="TestId" closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.prop('id')).toContain('TestId');
  });

  it('should append data passed in with attributes', () => {
    const toggleButton = shallow(<ToggleButton data-terra-text-mock="MockData" closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.prop('data-terra-text-mock')).toContain('MockData');
  });

  it('should append styles passed in with attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const toggleButton = shallow(<ToggleButton style={{ height: '100px' }} closedButtonText="Show">Test</ToggleButton>);
    expect(toggleButton.prop('style')).toEqual({ height: '100px' });
    /* eslint-disable react/forbid-component-props */
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<ToggleButton closedButtonText="Show">Test</ToggleButton>);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required closedButtonText', () => {
    try {
      shallow(<ToggleButton>Test</ToggleButton>);
    } catch (e) {
      expect(e.message).toContain('The prop `closedButtonText` is marked as required');
    }
  });
});
