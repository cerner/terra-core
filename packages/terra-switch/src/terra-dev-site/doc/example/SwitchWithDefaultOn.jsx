import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [isOn, setValue] = useState(true); // makes switch on by default
  return (
    <div>
      <Switch
        isOn={isOn}
        labelText="Label"
        onChange={() => { setValue(!isOn); }}
      />
    </div>
  );
};
