import React from 'react';
import Select from '../../src/Select';

it('should render a default Select component', () => {
  const select = <Select choices={['moo']} />;
  const wrapper = shallow(select);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Select when all the possible props are passed into it', () => {
  const select = (
    <Select
      choices={['moo']}
      name="description"
      required
    />);

  const wrapper = shallow(select);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just the required fields and a default value is passed into the Select', () => {
  const select = <Select choices={['moo', 'boo']} defaultValue="boo" />;
  const wrapper = mount(select);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just the required fields and a onChange function is passed into the Textarea', () => {
  const select = <Select choices={['moo', 'boo']} onChange={() => {}} />;
  const wrapper = mount(select);
  expect(wrapper).toMatchSnapshot();
});
