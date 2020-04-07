import React, { useState } from 'react';
import Switch from 'terra-switch';

const SwitchWithLongLabelText = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      buttonId="switchWithLongLabel"
      labelId="label4"
      checked={value}
      labelText="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
      onChange={setValue}
    />
  );
};

export default SwitchWithLongLabelText;
