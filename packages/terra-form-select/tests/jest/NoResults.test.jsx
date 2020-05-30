import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import NoResults from '../../src/shared/_NoResults';

describe('NoResults', () => {
  it('should render a default NoResults', () => {
    const wrapper = shallowWithIntl(<NoResults value="value" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NoResults with custom content', () => {
    const wrapper = shallowWithIntl(<NoResults value="value" noResultContent={<div>Custom</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <NoResults value="value" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
