import React from 'react';
import SectionHeader from '../../src/SectionHeader';

describe('SectionHeader', () => {
  const defaultRender = <SectionHeader title="foo" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without an accordion icon when no 'onClick()' is passed", () => {
    const sectionHeader = <SectionHeader title="foo" />;
    const wrapper = render(sectionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with an accordion icon when an 'onClick()' callback is passed", () => {
    const sectionHeader = <SectionHeader title="foo" onClick={() => {}} />;
    const wrapper = render(sectionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with an accordion icon in the open position when an 'onClick()' callback and 'isOpen' is passed", () => {
    const sectionHeader = <SectionHeader title="foo" onClick={() => {}} isOpen />;
    const wrapper = render(sectionHeader);
    expect(wrapper).toMatchSnapshot();
  });
});
