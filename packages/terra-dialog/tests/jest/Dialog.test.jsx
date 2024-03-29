import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Dialog from '../../src/Dialog';

describe('Dialog', () => {
  const defaultRender = <Dialog header="Header Content" footer="Footer Content">some body content</Dialog>;

  // Snapshot Test
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class dialog', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender).dive();
    expect(wrapper.prop('className')).toContain('dialog');
  });

  it('should render a Dialog with merged attributes', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Dialog header="Header Content" footer="Footer Content" className="TestClass">some body content</Dialog>).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {defaultRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
