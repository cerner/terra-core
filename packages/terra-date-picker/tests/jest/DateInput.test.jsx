import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import DateInput from '../../lib/DateInput';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

it('should render a default date input', () => {
  const dateInput = render(<IntlProvider locale={locale} messages={messages}><DateInput /></IntlProvider>);
  expect(dateInput).toMatchSnapshot();
});

it('should render a default date input with all props', () => {
  const dateInput = render((
    <IntlProvider locale={locale} messages={messages}>
      <DateInput
        inputAttributes={{ id: 'terra-date-input' }}
        name="date-input"
        placeholder="MM/DD/YYYY"
        value="01/01/2017"
        onChange={() => {}}
        onClick={() => {}}
        onKeyDown={() => {}}
      />
    </IntlProvider>));

  expect(dateInput).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<DateInput name="date-input" />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});
