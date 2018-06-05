import React from 'react';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

export default () =>
  <StatusView id="statusView" variant="error" title="500" message="An exception was thrown.">
    <Button text="OK" key="1" id="button1" />
    <Button text="Cancel" key="2" id="button2" />
  </StatusView>;
