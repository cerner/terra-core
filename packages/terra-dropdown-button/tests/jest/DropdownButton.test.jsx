import React from 'react';
import DropdownButton, { Item, Variants } from '../../src/DropdownButton';

describe('Dropdown Button', () => {
  it('should render a default dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an emphasis dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" variant={Variants.EMPHASIS}>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" isDisabled>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a block dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" isBlock>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a compact dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" isCompact>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an open dropdown', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" test-custom-attribute other-custom-attribute="purple">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
