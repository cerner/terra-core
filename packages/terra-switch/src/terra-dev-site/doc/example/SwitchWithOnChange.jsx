import React, { useState } from 'react';
import Switch from 'terra-switch';

const SwitchWithOnChange = () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <Switch
      buttonId="defaultSwitch1"
      labelId="label3"
      checked={value}
      labelText="Label"
      onChange={setValue}
    />
  );
};

export default SwitchWithOnChange;
