import React from 'react';
import DropdownButton, { Button, Variants } from '../../src/DropdownButton';
import SplitButton from '../../src/SplitButton';

describe('Dropdown Button', () => {
  it('should render a default dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option">
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default split type', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" onClick={() => {}} test-custom-attribute other-custom-attribute="purple">
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an emphasis dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" variant={Variants.EMPHASIS}>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" disabled>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a block dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" isBlock>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown type with a set width', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" width="500px">
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown type with a bounding ref', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" boundingRef={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an open dropdown', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option">
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown type with a onClick in the default option and ignore it', () => {
    const wrapper = shallow(
      <DropdownButton label="Primary Option" onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
