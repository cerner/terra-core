import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Item from '../../src/Item';

describe('Item', () => {
  it('renders a default item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onSelect={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onSelect={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Item label="1st Option" requestClose={() => {}} onSelect={() => {}} />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
