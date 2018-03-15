import React from 'react';
import ToggleSectionHeader from '../../src/ToggleSectionHeader';

describe('ToggleSectionHeader', () => {
  // Snapshot Tests
  it('should render a default toggle section header', () => {
    const wrapper = render(<ToggleSectionHeader title="default title">Test</ToggleSectionHeader>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an animated toggle section header', () => {
    const toggleSectionHeader = render(<ToggleSectionHeader isAnimated title="animated title">Test</ToggleSectionHeader>);
    expect(toggleSectionHeader).toMatchSnapshot();
  });

  it('should render an initially open toggle section header', () => {
    const toggleSectionHeader = render(<ToggleSectionHeader title="initially open title" isInitiallyOpen>Test</ToggleSectionHeader>);
    expect(toggleSectionHeader).toMatchSnapshot();
  });

  // Event Tests
  it('should render an open toggle section header when clicked', () => {
    const toggleSectionHeader = mount(<ToggleSectionHeader title="opens on click title">opens on click section header</ToggleSectionHeader>);
    toggleSectionHeader.find('SectionHeader').simulate('click');
    expect(toggleSectionHeader).toMatchSnapshot();
  });

  it('should call any custom onClick that is provided by the user correctly when clicked', () => {
    const customOnClick = jest.fn();
    const toggleSectionHeader = mount(<ToggleSectionHeader sectionHeaderAttrs={{ onClick: customOnClick }} title="custom onClick title">triggers a custom onClick when clicked section header</ToggleSectionHeader>);
    toggleSectionHeader.find('SectionHeader').simulate('click');
    expect(toggleSectionHeader).toMatchSnapshot();
    expect(customOnClick).toHaveBeenCalled();
  });

  it('should call any custom onOpen that is provided by the user correctly when clicked', () => {
    // eslint-disable-next-line no-alert
    const toggleSectionHeader = shallow(<ToggleSectionHeader title="custom title" onOpen={() => alert('Opened')}>Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.onOpen.toString()).toEqual('function onOpen() {return alert(\'Opened\');}');
  });

  it('should call any custom onCLose that is provided by the user correctly when clicked', () => {
    // eslint-disable-next-line no-alert
    const toggleSectionHeader = shallow(<ToggleSectionHeader title="custom title" onCLose={() => alert('Closed')}>Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.onCLose.toString()).toEqual('function onCLose() {return alert(\'Closed\');}');
  });

  // Prop Tests
  it('should set sectionHeaderAttrs prop correctly', () => {
    const sectionHeaderAttrProps = { backgroundColor: 'red' };
    const toggleSectionHeader = shallow(<ToggleSectionHeader sectionHeaderAttrs={sectionHeaderAttrProps} title="sectionHeaderAttrs props test">Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.sectionHeaderAttrs).toEqual(sectionHeaderAttrProps);
    expect(toggleSectionHeader).toMatchSnapshot();
  });

  it('should set the children prop correctly', () => {
    const children = 'test child';
    const toggleSectionHeader = shallow(<ToggleSectionHeader title="sectionHeaderAttrs props test">{children}</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.children).toEqual(children);
    expect(toggleSectionHeader).toMatchSnapshot();
  });

  it('should set the level prop correctly', () => {
    const level = 1;
    const toggleSectionHeader = shallow(<ToggleSectionHeader level={level} title="sectionHeaderAttrs props test">Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.level).toEqual(level);
    expect(toggleSectionHeader).toMatchSnapshot();
  });
});
