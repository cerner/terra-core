import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import StatusView from '../../lib/StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <StatusView id="statusView" variant={StatusView.Opts.variants.ERROR} title="500" message="An exception was thrown.">
      <Button text="OK" key="1" id="button1" />
      <Button text="Cancel" key="2" id="button2" />
    </StatusView>
  </Base>;
