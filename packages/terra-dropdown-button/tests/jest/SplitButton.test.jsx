import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import SplitButton, { Item } from '../../src/SplitButton';

describe('Dropdown Button', () => {
  it('should render a default split type', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a disabled split type', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" disabled onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a block split type', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" isBlock onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a compact split type', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" isCompact onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render an open split type', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" test-custom-attribute other-custom-attribute="purple" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
