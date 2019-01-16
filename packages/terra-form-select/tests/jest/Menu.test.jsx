import React from 'react';
import Menu from '../../src/_Menu';
import Option from '../../src/_Option';
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

    jest.useFakeTimers();

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="tag" value="value" searchValue="value">
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = shallow(menu, intlContexts.shallowContext);
    wrapper.setState({ searchValue: 'value' });

    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('');
  });

  it('should render a Menu with no results and update the live region appropriately', () => {
    const liveRegion = { current: document.createElement('div') };
    const mockIntl = { formatMessage: id => (`No Results for ${id.id}`) };

    jest.useFakeTimers();

    const menu = (
      <Menu onSelect={() => {}} visuallyHiddenComponent={liveRegion} intl={mockIntl} variant="default" value="value" searchValue="asdfasdf">
        <Option value="value" display="display" />
      </Menu>
    );

    const wrapper = shallow(menu, intlContexts.shallowContext);
    wrapper.setState({ searchValue: 'asdf' });

    jest.advanceTimersByTime(500);

    expect(wrapper).toMatchSnapshot();
    expect(liveRegion.current.innerText).toEqual('No Results for Terra.form.select.noResults');
  });
});
