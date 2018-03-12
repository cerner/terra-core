import React from 'react';
import ToggleSectionHeader from '../../src/ToggleSectionHeader';

describe('ToggleSectionHeader', () => {
  // Snapshot Tests
  it('should render a default toggle section header', () => {
    const wrapper = render(<ToggleSectionHeader title="default title">Test</ToggleSectionHeader>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an animated toggle section header', () => {
    const toggleSectionHeader = render(<ToggleSectionHeader title="animated title">Test</ToggleSectionHeader>);
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

  // Prop Tests
  it('should set selectionHeaderAttrs prop correctly', () => {
    const sectionHeaderAttrProps = { backgroundColor: 'red' };
    const toggleSectionHeader = shallow(<ToggleSectionHeader selectionHeaderAttrs={sectionHeaderAttrProps} title="selectionHeaderAttrs props test">Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.selectionHeaderAttrs).toEqual(sectionHeaderAttrProps);
  });

  it('should set the children prop correctly', () => {
    const children = 'test child';
    const toggleSectionHeader = shallow(<ToggleSectionHeader title="selectionHeaderAttrs props test">{children}</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.children).toEqual(children);
  });

  it('should set the level prop correctly', () => {
    const level = 1;
    const toggleSectionHeader = shallow(<ToggleSectionHeader level={level} title="selectionHeaderAttrs props test">Test</ToggleSectionHeader>);
    expect(toggleSectionHeader.instance().props.level).toEqual(level);
  });
});
