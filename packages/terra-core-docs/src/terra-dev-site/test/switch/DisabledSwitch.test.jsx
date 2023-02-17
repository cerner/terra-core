import React from 'react';
import Switch from 'terra-switch';

const DisabledSwitch = () => (
  <Switch
    id="disabledSwitch"
    isChecked
    labelText="Label"
    isDisabled
  />
);

export default DisabledSwitch;
