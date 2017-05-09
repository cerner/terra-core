import React from 'react';
import DatePicker from '../../lib/DatePicker';
import DateRange from '../../lib/DateRange';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

it('should render a default date input and date picker', () => {
  const datePicker = <DatePicker utcOffset={0} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date range', () => {
  const dateRange = <DateRange utcOffset={0} />;
  const wrapper = shallow(dateRange);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = (<DatePicker
    excludeDates={['04/01/2016', '04/03/2016']}
    utcOffset={0}
  />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = <DatePicker filterDate={isWeekday} utcOffset={0} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = (<DatePicker
    includeDates={['04/01/2016', '04/02/2016', '04/03/2016']}
    utcOffset={0}
  />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = (<DatePicker
    minDate={'04/01/2016'}
    maxDate={'04/10/2016'}
    utcOffset={0}
  />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});
