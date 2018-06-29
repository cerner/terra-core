import React from 'react';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default () =>
  (<div>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum}>
      <Button text={ipsum} key="1" id="button1" />
      <Button text={ipsum} key="2" id="button2" />
    </StatusView>
   </div>);
