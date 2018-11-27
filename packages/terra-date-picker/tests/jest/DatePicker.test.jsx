import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import moment from 'moment';
import DatePicker from '../../lib/DatePicker';
import DateUtil from '../../lib/DateUtil';
import messages from '../../translations/en-US.json';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.fn();
DateUtil.filterInvalidDates = jest.fn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

const locale = 'en-US';
const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

it('should render a default date input and date picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date input with custom input attributes', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" utcOffset={0} inputAttributes={{ id: 'terra-date-input' }} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker filterDate={isWeekday} name="date-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" excludeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" includeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" minDate="2017-04-01" maxDate="2017-04-10" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" releaseFocus={releaseFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" requestFocus={requestFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" onChange={onChange} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" onChangeRaw={onChangeRaw} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with onSelect', () => {
  const onSelect = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" onSelect={onSelect} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<DatePicker name="date-input" />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});

it('should render a date picker with onCalendarButtonClick', () => {
  const handleOnCalendarButtonClick = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" onCalendarButtonClick={handleOnCalendarButtonClick} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with onInputFocus', () => {
  const handleOnInputFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" onInputFocus={handleOnInputFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled date picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DatePicker name="date-input" disabled utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});
