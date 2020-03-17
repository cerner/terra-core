import React, { useState } from 'react';
import Switch from 'terra-switch';

const SwitchWithOnChange = () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <Switch
      id="defaultSwitchOn"
      labelId="label3"
      checked={value}
      label="Label"
      onChange={setValue}
    />
  );
};

export default SwitchWithOnChange;
