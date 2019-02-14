import React from 'react';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

const ipsum = 'Lorem ipsum dolor';

export default () => (
  <div style={{ width: '75px', border: '1px black solid' }}>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum}>
      <Button text={ipsum} key="1" id="button1" />
      <Button text={ipsum} key="2" id="button2" />
    </StatusView>
  </div>
);
