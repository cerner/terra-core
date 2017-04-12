import React from 'react';
import moment from 'moment';
import TimeInput from '../../src/TimeInput';

it('should render a default time input', () => {
  const timeInput = <TimeInput />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with a default time', () => {
  const timeInput = <TimeInput defaultTime={moment.utc('04-01-2016', 'MM-DD-YYYY HH:mm')} />;
  const wrapper = shallow(timeInput);
  expect(wrapper).toMatchSnapshot();
});
