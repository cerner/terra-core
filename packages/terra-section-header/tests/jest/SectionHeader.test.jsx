import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SectionHeader from '../../src/SectionHeader';

describe('SectionHeader', () => {
  const defaultRender = <SectionHeader text="foo" level={2} />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render without an accordion icon when no 'onClick()' is passed", () => {
    const sectionHeader = <SectionHeader text="foo" level={2} />;
    const wrapper = render(sectionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with an accordion icon when an 'onClick()' callback is passed", () => {
    const sectionHeader = <SectionHeader text="foo" level={2} onClick={() => {}} />;
    const wrapper = shallow(sectionHeader);

    const button = wrapper.find('button.arrange-wrapper').at(0);
    expect(button.props()['aria-expanded']).toBe(false);
    expect(button.props()['aria-label']).toBe('foo');

    expect(wrapper).toMatchSnapshot();
  });

  it("should render with an accordion icon in the open position when an 'onClick()' callback and 'isOpen' is passed", () => {
    const sectionHeader = <SectionHeader text="foo" level={2} onClick={() => {}} isOpen />;
    const wrapper = shallow(sectionHeader);

    const button = wrapper.find('button.arrange-wrapper').at(0);
    expect(button.props()['aria-expanded']).toBe(true);
    expect(button.props()['aria-label']).toBe('foo');

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SectionHeader text="foo" level={2} />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onClick callback is triggered when clicking a button', () => {
    const mockClick = jest.fn();

    const wrapper = mount(
      <SectionHeader
        text="foo"
        level={2}
        onClick={() => { mockClick(); }}
      />,
    );

    // Find column headers
    const headerButton = wrapper.find('button').at(0);

    // Simulate onMouseDown event on section header button
    headerButton.simulate('click');

    // Validate mock function was called from simulated click event
    expect(mockClick).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onClick callback is triggered when pressing space when button has focus', () => {
    const mockClick = jest.fn();

    const wrapper = mount(
      <SectionHeader
        text="foo"
        level={2}
        onClick={() => { mockClick(); }}
      />,
    );

    // Find column headers
    const headerButton = wrapper.find('button').at(0);

    // Simulate space bar event on row selection column header
    headerButton.simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockClick).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onClick callback is triggered when pressing return when button has focus', () => {
    const mockClick = jest.fn();

    const wrapper = mount(
      <SectionHeader
        text="foo"
        level={2}
        onClick={() => { mockClick(); }}
      />,
    );

    // Find column headers
    const headerButton = wrapper.find('button').at(0);

    // Simulate space bar event on row selection column header
    headerButton.simulate('keydown', { keyCode: 13 });

    // Validate mock function was called from simulated click event
    expect(mockClick).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a span element for title since no onClick exists', () => {
    const wrapper = mount(defaultRender);

    const headerButton = wrapper.find('button.arrange-wrapper');
    expect(headerButton).toHaveLength(0);

    const headerSpan = wrapper.find('span.arrange-wrapper');
    expect(headerSpan).toHaveLength(1);
    expect(headerSpan.text()).toBe('foo');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that section header has a tab index when specified with custom props', () => {
    const wrapper = mount(
      <SectionHeader
        text="foo"
        level={2}
        tabIndex="-1"
      />,
    );

    const sectionHeader = wrapper.find('.section-header').at(0);
    expect(sectionHeader.props().tabIndex).toBe('-1');
  });

  it('verifies that section header with a fixed title has appropriate classes', () => {
    const wrapper = shallow(
      <SectionHeader
        text="foo"
        level={2}
        isTitleFixed
      />,
    );

    const sectionHeader = wrapper.find('.arrange-wrapper.title-fixed').at(0);
    expect(sectionHeader).toHaveLength(1);
  });
});
