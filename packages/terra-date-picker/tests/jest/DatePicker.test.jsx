import React from 'react';
import moment from 'moment';
import DatePicker from '../../lib/DatePicker';
import DateUtil from '../../lib/DateUtil';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.genMockFn();
DateUtil.filterInvalidDates = jest.genMockFn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

it('should render a default date input and date picker', () => {
  const datePicker = <DatePicker name="date-input" utcOffset={0} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a default date input with custom input attributes', () => {
  const datePicker = <DatePicker name="date-input" utcOffset={0} inputAttributes={{ id: 'terra-date-input' }} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = <DatePicker filterDate={isWeekday} name="date-input" utcOffset={0} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = (<DatePicker name="date-input" excludeDates={['2017-04-01']} utcOffset={0} />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = (<DatePicker name="date-input" includeDates={['2017-04-01']} utcOffset={0} />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = (<DatePicker name="date-input" minDate={'2017-04-01'} maxDate={'2017-04-10'} utcOffset={0} />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = (<DatePicker name="date-input" releaseFocus={releaseFocus} utcOffset={0} />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = (<DatePicker name="date-input" requestFocus={requestFocus} utcOffset={0} />);
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});
