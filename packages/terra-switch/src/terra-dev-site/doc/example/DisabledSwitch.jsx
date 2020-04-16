import React from 'react';
import Switch from 'terra-switch';

const DisabledSwitch = () => (
  <Switch
    switchId="disabledSwitch"
    labelId="label2"
    checked
    labelText="Label"
    disabled
  />
);

export default DisabledSwitch;
