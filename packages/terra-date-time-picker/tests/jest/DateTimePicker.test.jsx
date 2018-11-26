import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import DateTimePicker from '../../lib/DateTimePicker';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

it('should render a default date time picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom date input attributes', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} dateInputAttributes={{ id: 'terra-date-input' }} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom time input attributes', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} timeInputAttributes={{ id: 'terra-time-input' }} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with filtered dates', () => {
  const isWeekday = (date) => {
    const day = date.day();
    return day !== 0 && day !== 6;
  };
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker filterDate={isWeekday} name="date-time-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with disabled dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" excludeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with included dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" includeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with min and max dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" maxDateTime="2017-04-01" minDateTime="2017-04-10" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" releaseFocus={releaseFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" requestFocus={requestFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" onChange={onChange} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" onChangeRaw={onChangeRaw} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with a default date and time', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" value="2017-04-01T10:30" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<DateTimePicker name="date-time-input" />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});

it('should render a disabled date time picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" disabled utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});
