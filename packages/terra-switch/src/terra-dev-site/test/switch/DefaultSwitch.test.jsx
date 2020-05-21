import React, { useState } from 'react';
import Switch from '../../../Switch';

const DefaultSwitch = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      switchId="defaultSwitch"
      labelId="label1"
      isChecked={value}
      labelText="Label"
      onChange={setValue}
    />
  );
};

export default DefaultSwitch;
