import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <Switch
        id="switchWithLongLabel"
        labelId="label4"
        checked={value}
        label="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
        onChange={(event, checked) => { setValue(!checked); }}
      />
    </div>
  );
};
