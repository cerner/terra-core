import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');
const ipsum = 'Lorem ipsum dolor';

export default () =>
  <Base locale={locale}>
    <div style={{ width: '70px', border: '1px black solid' }}>
      <StatusView id="statusView" variant="error" title={ipsum} message={ipsum}>
        <Button text={ipsum} key="1" id="button1" />
        <Button text={ipsum} key="2" id="button2" />
      </StatusView>
    </div>
  </Base>;
