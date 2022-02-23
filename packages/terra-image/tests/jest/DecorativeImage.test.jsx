import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import DecorativeImage from '../../src/variants/_DecorativeImage';

/* Decorative Image component */
it('should render a default component with empty attribute', () => {
    const wrapper = shallow(<DecorativeImage src="" alt="default" title="default" />);
    expect(wrapper).toMatchSnapshot();
});

it('should render a default component without title attribute', () => {
  const wrapper = shallow(<DecorativeImage src="" alt="default" title="default" />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a default component without aria attributes', () => {
  const wrapper = shallow(<DecorativeImage src="" alt="default" title="default" aria-label="default label" />);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DecorativeImage src="" alt="" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
