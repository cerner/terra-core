import React, { useState } from 'react';
import Switch from 'terra-switch';

const BlockSwitch = () => {
  const [value, setValue] = useState(true);
  return (
    <Switch
      isChecked={value}
      labelText="Block Switch with Long Label Text"
      isBlock
      onChange={setValue}
    />
  );
};

export default BlockSwitch;
