import React from 'react';
import DropdownList from '../../src/_DropdownList';
import { Item } from '../../src/DropdownButton';

describe('Dropdown List', () => {
  it('renders a default dropdown list', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    );

    expect(wrapper).toMatchSnapshot();
    // ensures both data attributes are added when list contains single item
    const item = wrapper.find('Item');
    expect(item.props()).toHaveProperty('data-terra-dropdown-first-list-item');
    expect(item.props()).toHaveProperty('data-terra-dropdown-last-list-item');
  });

  it('renders a dropdown list with a set width', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}} width="440px">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with multiple children', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();

    // ensures appropriate data attributes are added to items in list
    const item = wrapper.find('Item');
    expect(item.at(0).props()).toHaveProperty('data-terra-dropdown-first-list-item');
    expect(item.at(2).props()).toHaveProperty('data-terra-dropdown-last-list-item');
  });

  it('renders a dropdown list a non-default focused option', () => {
    const wrapper = shallow(
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
    const wrapper = shallow(
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
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option', active: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });
});
