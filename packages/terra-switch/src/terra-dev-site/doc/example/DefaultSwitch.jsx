import React, { useState } from 'react';
import Switch from 'terra-switch';

export default () => {
  const [value, setValue] = useState(true);
  return (
    <div>
      <Switch
        isOn={value}
        labelText="Label"
        onChange={() => { setValue(!value); }}
      />
    </div>
  );
};
