import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import MaxSelection from '../../src/shared/_MaxSelection';

describe('MaxSelection', () => {
  it('should render a default MaxSelection', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<MaxSelection value="3" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className to tag variant', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <MaxSelection value="3" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
