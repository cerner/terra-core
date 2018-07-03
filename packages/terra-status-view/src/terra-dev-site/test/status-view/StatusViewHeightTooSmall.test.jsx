import React from 'react';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

export default () => (
  <StatusView id="statusView" variant="error" style={{ border: '1px solid black', height: '250px' }} message="An exception was thrown">
    <Button text="OK" key="1" id="button1" />
    <Button text="Cancel" key="2" id="button2" />
  </StatusView>
);
