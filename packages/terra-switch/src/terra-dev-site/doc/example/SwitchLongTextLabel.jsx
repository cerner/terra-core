import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div>
      <Switch
        isOn={value}
        labelText="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
        onChange={() => { setValue(!value); }}
      />
    </div>
  );
};
