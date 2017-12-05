import React from 'react';
import Button from 'terra-button';
import { IntlProvider } from 'react-intl';
import StatusView from '../../src/StatusView';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

// Snapshot Tests
it('should render an image with a status view', () => {
  const defaultRender = (<IntlProvider locale={locale} messages={messages}>
    <StatusView />
  </IntlProvider>);

  const wrapper = mount(defaultRender);
  expect(wrapper).toMatchSnapshot();
});
