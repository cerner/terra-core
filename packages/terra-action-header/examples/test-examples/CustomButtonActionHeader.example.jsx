/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import Button from 'terra-button';
import { IntlProvider } from 'react-intl';
import ActionHeader from '../../lib/ActionHeader';

import messages from '../../translations/en-US.json';

const locale = 'en-US';

export default () => (
  <IntlProvider locale={locale} messages={messages}>
    <ActionHeader title="Custom Button Action Header" >
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </ActionHeader>
  </IntlProvider>
);
