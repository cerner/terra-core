import React, { useState } from 'react';
import Switch from 'terra-switch';

const BlockSwitch = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      id="blockSwitch"
      isChecked={value}
      labelText="Label"
      isBlock
      onChange={setValue}
    />
  );
};

export default BlockSwitch;
