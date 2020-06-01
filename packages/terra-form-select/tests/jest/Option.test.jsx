import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Option from '../../src/shared/_Option';

describe('Option', () => {
  it('should render a default Option', () => {
    const wrapper = shallow(<Option value="value" display="display" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled Option', () => {
    const wrapper = shallow(<Option disabled value="value" display="display" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOption', () => {
    const option = <Option value="value" display="display" />;
    expect(option.type.isOption).toBeTruthy();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Option value="value" display="display" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
