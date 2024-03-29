import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ClearOption from '../../src/shared/_ClearOption';

describe('ClearOption', () => {
  it('should render a default ClearOption', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<ClearOption value="" display="Clear" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ClearOption value="" display="Clear" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
