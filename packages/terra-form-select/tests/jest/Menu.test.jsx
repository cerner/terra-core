import React from 'react';
import Menu from '../../src/_Menu';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
