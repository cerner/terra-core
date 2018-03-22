/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import { IntlProvider } from 'react-intl';
import ActionHeader from '../../lib/ActionHeader';

import messages from '../../translations/en-US.json';

const locale = 'en-US';

export default () => (
  <IntlProvider locale={locale} messages={messages}>
    <ActionHeader title="Default Action Header" />
  </IntlProvider>
);
