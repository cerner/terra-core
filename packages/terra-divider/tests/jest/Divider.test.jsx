import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Divider from '../../src/Divider';

describe('Divider', () => {
  const defaultRender = <Divider />;

  // Snapshot Tests
  it('should render a basic component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<Divider id="testDivider" text="custom-text" level={3} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Inline Custom Text Test
  it('it should pass in a string of text', () => {
    const wrapper = shallow(<Divider text="Divider Test String" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {defaultRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should spread a custom class onto the hr divider', () => {
    const wrapper = shallow(<Divider className="custom-class" />);

    expect(wrapper.hasClass('custom-class')).toBe(true);
  });

  it('should spread a custom class onto the text divider', () => {
    const wrapper = shallow(<Divider className="custom-class" text="custom-text" />);

    expect(wrapper.hasClass('custom-class')).toBe(true);
  });

  it('should spread a custom prop onto the hr divider', () => {
    const wrapper = shallow(<Divider id="custom-id" text="custom-text" level={3} />);

    expect(wrapper.is('#custom-id')).toBe(true);
  });

  it('should spread a custom prop onto the text divider', () => {
    const wrapper = shallow(<Divider id="custom-id" text="custom-text" />);

    expect(wrapper.is('#custom-id')).toBe(true);
  });

  it('should spread a custom prop onto the text with level divider', () => {
    const wrapper = shallow(<Divider id="custom-id" text="custom-text" level={3} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should apply the theme context className to the hr divider', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'theme-class-name' }}>
        <Divider />
      </ThemeContextProvider>,
    );

    expect(wrapper.find('hr').hasClass('theme-class-name')).toBe(true);
  });

  it('should apply the theme context className to the text divider', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'theme-class-name' }}>
        <Divider text="custom-text" />
      </ThemeContextProvider>,
    );

    expect(wrapper.find('div').hasClass('theme-class-name')).toBe(true);
  });
});
