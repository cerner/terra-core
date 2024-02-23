import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import NoResults from '../../src/shared/_NoResults';

describe('NoResults', () => {
  it('should render a default NoResults', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<NoResults value="value" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NoResults with custom content', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<NoResults value="value" noResultContent={<div>Custom</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <NoResults value="value" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
