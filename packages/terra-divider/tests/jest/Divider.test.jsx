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
    const wrapper = shallow(<Divider id="testDivider" />);
    expect(wrapper).toMatchSnapshot();
  });

  // Inline Custom Text Test
  it('it should pass in a string of text', () => {
    const wrapper = shallow(<Divider id="testDivider" text="Divider Test String" />);
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
});
