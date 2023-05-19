import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import DropdownList from '../../src/_DropdownList';
import { Item } from '../../src/DropdownButton';

describe('Dropdown List', () => {
  it('renders a default dropdown list', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    ).dive();

    expect(wrapper).toMatchSnapshot();
    // ensures both data attributes are added when list contains single item
    const item = wrapper.find('Item');
    expect(item.props()).toHaveProperty('data-terra-dropdown-list-item');
  });

  it('renders a dropdown list with a set width', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}} width="440px">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with multiple children', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list a non-default focused option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ active: '3rd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active and focused option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option', active: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <DropdownList requestClose={() => {}}>
          <Item label="1st Option" onSelect={() => {}} />
          <Item label="2nd Option" onSelect={() => {}} />
          <Item label="3rd Option" onSelect={() => {}} />
        </DropdownList>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
