import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from '@cerner/terra-enzyme-intl';
import ClearOption from '../../src/shared/_ClearOption';

describe('ClearOption', () => {
  it('should render a default ClearOption', () => {
    const wrapper = shallowWithIntl(<ClearOption value="" display="Clear" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = shallowWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ClearOption value="" display="Clear" />
      </ThemeContextProvider>,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
