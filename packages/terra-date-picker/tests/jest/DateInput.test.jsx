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
  const dateInput = render(
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
    </IntlProvider>,
  );

  expect(dateInput).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  try {
    shallow(<DateInput name="date-input" />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
