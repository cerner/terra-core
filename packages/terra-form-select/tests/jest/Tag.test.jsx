import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import Tag from '../../src/shared/_Tag';

describe('Tag', () => {
  it('should render a default Tag', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <Tag value="value" onDeselect={() => {}}>Content</Tag>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Tag value="value" onDeselect={() => {}}>
          Content
        </Tag>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
