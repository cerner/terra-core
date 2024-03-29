import React, { useState } from 'react';
import Switch from 'terra-switch';

const DefaultSwitch = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      id="defaultSwitch"
      isChecked={value}
      labelText="Label"
      onChange={setValue}
    />
  );
};

export default DefaultSwitch;
