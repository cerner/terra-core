import React from 'react';
import SplitButton, { Button } from '../../src/SplitButton';

describe('Dropdown Button', () => {
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

  it('should render a disabled split type', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" disabled onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a block split type', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" isBlock onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an open split type', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallow(
      <SplitButton primaryOptionLabel="Primary Option" test-custom-attribute other-custom-attribute="purple" onClick={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </SplitButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
