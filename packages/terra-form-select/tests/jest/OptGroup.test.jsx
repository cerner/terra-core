import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import OptGroup from '../../src/shared/_OptGroup';

describe('OptGroup', () => {
  it('should render a default Option', () => {
    const wrapper = shallowWithIntl(<OptGroup label="label" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOptGroup', () => {
    const option = <OptGroup label="label" />;
    expect(option.type.isOptGroup).toBeTruthy();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <OptGroup label="label" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
