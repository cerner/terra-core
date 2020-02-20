import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [isOn, setValue] = useState(false);
  return (
    <div>
      <Switch
        isOn={isOn}
        labelText="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
        onChange={() => { setValue(!isOn); }}
      />
    </div>
  );
};
