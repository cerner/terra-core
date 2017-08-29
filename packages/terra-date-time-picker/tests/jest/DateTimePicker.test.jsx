import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import moment from 'moment';
import DateTimePicker from '../../lib/DateTimePicker';
import DateTimeUtil from '../../lib/DateTimeUtil';
import messages from '../../translations/en-US.json';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateTimeUtil.createSafeDate = jest.genMockFn();
DateTimeUtil.filterInvalidDates = jest.genMockFn();
DateTimeUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateTimeUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

const locale = 'en-US';
const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

it('should render a default date input and date picker', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date input with custom input attributes', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" utcOffset={0} inputAttributes={{ id: 'terra-date-input' }} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker filterDate={isWeekday} name="date-input" utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" excludeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" includeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" minDate={'2017-04-01'} maxDate={'2017-04-10'} utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" releaseFocus={releaseFocus} utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('should render a date picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = shallow(
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-input" requestFocus={requestFocus} utcOffset={0} />
    </IntlProvider>,
  );
  expect(datePicker).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  try {
    render(<DateTimePicker name="date-input" />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
