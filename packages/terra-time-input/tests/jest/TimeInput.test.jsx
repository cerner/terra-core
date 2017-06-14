import React from 'react';
import TimeInput from '../../src/TimeInput';
import TimeUtil from '../../src/TimeUtil';

// The converted time returned in TimeUtil.createUTCTimeFromLocalTime could be different depending on the timezone where these tests are executed.
// Therefore, mock TimeUtil.createUTCTimeFromLocalTime to always return a consistent string so that the jest snapshot is consistent.
TimeUtil.createUTCTimeFromLocalTime = jest.genMockFn();
TimeUtil.createUTCTimeFromLocalTime.mockImplementation(() => '15:45Z');

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
