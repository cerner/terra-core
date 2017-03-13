import React from 'react';
import moment from 'moment';
import DatePicker from '../../src/DatePicker';
import DateRange from '../../src/DateRange';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

it('should render a default date input and date picker', () => {
  const datePicker = <DatePicker />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date range', () => {
  const dateRange = <DateRange />;
  const wrapper = shallow(dateRange);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = <DatePicker excludeDates={[moment().subtract(1, 'days'), moment().add(1, 'days')]} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = <DatePicker filterDate={isWeekday} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with highlighted dates', () => {
  const datePicker = <DatePicker highlightDates={[moment().subtract(3, 'days'), moment().add(3, 'days')]} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = <DatePicker includeDates={[moment(), moment().subtract(1, 'days'), moment().add(1, 'days')]} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = <DatePicker minDate={moment()} maxDate={moment().add(6, 'days')} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with two months', () => {
  const datePicker = <DatePicker monthsShown={2} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker that opens to a specific date', () => {
  const datePicker = <DatePicker openToDate={moment('1999-09-09')} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with the month and year dropdowns hidden', () => {
  const datePicker = <DatePicker showMonthDropdown={false} showYearDropdown={false} />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with the Today button', () => {
  const datePicker = <DatePicker todayButton="Today123" />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with the Today button hidden', () => {
  const datePicker = <DatePicker hideTodayButton />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker in portal', () => {
  const datePicker = <DatePicker portal />;
  const wrapper = shallow(datePicker);
  expect(wrapper).toMatchSnapshot();
});
