import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import StatusView from '../../lib/StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default () =>
  <Base locale={locale}>
    <StatusView id="statusView" variant={StatusView.Opts.variants.ERROR} title={ipsum} message={ipsum}>
      <Button text={ipsum} key="1" id="button1" />
      <Button text={ipsum} key="2" id="button2" />
    </StatusView>
  </Base>;
