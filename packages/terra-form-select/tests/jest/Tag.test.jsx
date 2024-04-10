import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
import Tag from '../../src/shared/_Tag';

describe('Tag', () => {
  it('should render a default Tag', () => {
    const wrapper = enzyme.shallow(
      <IntlProvider locale="en">
        <Tag value="value" onDeselect={() => {}}>Content</Tag>
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzyme.mount(
      <IntlProvider locale="en">
        <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
          <Tag value="value" onDeselect={() => {}}>
            Content
          </Tag>
        </ThemeContextProvider>
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
