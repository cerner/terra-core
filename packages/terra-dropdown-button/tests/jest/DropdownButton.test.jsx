import React from 'react';
import DropdownButton, { Types, Variants } from '../../src/DropdownButton';

describe('Dropdown Button', () => {
  it('should render a default dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default split type', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option', callback: () => {} }} type={Types.SPLIT}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option', callback: () => {} }} type={Types.SPLIT}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option', callback: () => {} }} type={Types.SPLIT} test-custom-attribute other-custom-attribute="purple">
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an emphasis dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }} variant={Variants.EMPHASIS}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }} disabled>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a block dropdown type', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }} isBlock>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown type with a set width', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }} width="500px">
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown type with a bounding ref', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }} boundingRef={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an open dropdown', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option' }}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should change an emphasis split type to be neutral', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option', callback: () => {} }} type={Types.SPLIT} variant={Variants.EMPHASIS}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper.prop('className')).not.toContain('emphasis');
    expect(wrapper.prop('className')).toContain('neutral');
  });

  it('should render a dropdown type with a callback in the default option and ignore it', () => {
    const wrapper = shallow(
      <DropdownButton defaultOption={{ label: 'Primary Option', callback: () => {} }}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
