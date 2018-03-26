/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from '../../lib/ActionHeader';

export default () => (
  <ActionHeader title="Custom Button Action Header" >
    <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
  </ActionHeader>
);
