import React from 'react';
import TimeInput from '../../src/TimeInput';

const handleOnChange = () => {
};

it('should render a default time input', () => {
  const timeInput = <TimeInput />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with custom attributes', () => {
  const timeInput = <TimeInput inputAttributes={{ name: 'time-input', id: 'terra-time-input' }} />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with a default time', () => {
  const timeInput = <TimeInput value={'10:45'} />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onChange', () => {
  const timeInput = <TimeInput onChange={handleOnChange} />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});
