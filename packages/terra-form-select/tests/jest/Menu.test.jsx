import React from 'react';
import Menu from '../../src/_Menu';
import intlContexts from './intl-context-setup';

describe('Menu', () => {
  it('should render a default Menu', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id}`) };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Menu with an add option and set the screen reader region to blank', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id}`) };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="tag" value="value" searchValue="Tag" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('');
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    const menu = <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="default" value="value" />;
    const wrapper = shallow(menu, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('No Results for Terra.form.select.noResults');
  });
});
