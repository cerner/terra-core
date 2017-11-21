import React from 'react';
import intlContexts from './intl-context-setup';
import Select from '../../src/Select';

it('should render a default Select component', () => {
  const select = <Select><div>Child</div></Select>;
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Select with name provided', () => {
  const select = (
    <Select
      name="description"
    >
      <div>Child</div>
    </Select>
  );

  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a required Select', () => {
  const select = (
    <Select
      required
    >
      <div>Child</div>
    </Select>
  );

  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled Select', () => {
  const select = (
    <Select
      disabled
    >
      <div>Child</div>
    </Select>
    );

  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid Select', () => {
  const select = (
    <Select
      isInvalid
    >
      <div>Child</div>
    </Select>
  );

  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render Select with default value', () => {
  const select = (
    <Select defaultValue="b">
      <Select.Option value="m" display="moo" key="m" />
      <Select.Option value="b" display="boo" key="b" />
    </Select>
  );
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render Select with a value set', () => {
  const select = (
    <Select value="b">
      <Select.Option value="m" display="moo" key="m" />
      <Select.Option value="b" display="boo" key="b" />
    </Select>
  );
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render Select with onChange', () => {
  const select = (
    <Select onChange={() => {}}>
      <Select.Option value="m" display="moo" key="m" />
      <Select.Option value="b" display="boo" key="b" />
    </Select>
  );
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render Select with requestFocus', () => {
  const select = (
    <Select requestFocus={() => {}}>
      <Select.Option value="m" display="moo" key="m" />
      <Select.Option value="b" display="boo" key="b" />
    </Select>
  );
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render Select with releaseFocus', () => {
  const select = (
    <Select releaseFocus={() => {}}>
      <Select.Option value="m" display="moo" key="m" />
      <Select.Option value="b" display="boo" key="b" />
    </Select>
  );
  const wrapper = shallow(select, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});
