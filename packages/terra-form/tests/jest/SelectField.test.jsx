import React from 'react';
import SelectField from '../../src/SelectField';

it('should render a default SelectField component', () => {
  const selectField = <SelectField options={[{ value: 'm', display: 'moo' }]} />;
  const wrapper = shallow(selectField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a SelectField when all the possible props are passed into it', () => {
  const selectField = (
    <SelectField
      options={[{ value: 'm', display: 'moo' },
                { value: 'b', display: 'boo' }]}
      error="jinkies!"
      isInline
      label="Meddling Kids"
      labelAttrs={{ className: 'mystery-van' }}
      help="solve the mystery"
      name="zounds"
      required
      selectAttrs={{ className: 'scooby-snacks' }}
    />);

  const wrapper = shallow(selectField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just the required fields and a default value is passed into the SelectField', () => {
  const selectField = <SelectField options={[{ value: 'm', display: 'moo' }, { value: 'b', display: 'boo' }]} defaultValue="b" />;
  const wrapper = mount(selectField);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just the required fields and a onChange function is passed into the SelectField', () => {
  const selectField = <SelectField options={[{ value: 'm', display: 'moo' }, { value: 'b', display: 'boo' }]} onChange={() => {}} />;
  const wrapper = mount(selectField);
  expect(wrapper).toMatchSnapshot();
});
